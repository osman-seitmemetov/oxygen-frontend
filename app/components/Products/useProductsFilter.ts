import {useMemo} from "react";
import {useQuery} from "react-query";
import {CategoryService} from "@/services/CategoryService";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {useRouter} from "next/router";
import {ICategory} from "@/models/ICategory";
import {IType} from "@/models/IType";
import {IBrand} from "@/models/IBrand";
import {IColorValue} from "@/models/IColorValue";
import {INumberValue} from "@/models/INumberValue";
import {ITextValue} from "@/models/ITextValue";
import {IBooleanValue} from "@/models/IBooleanValue";
import {IParameter} from "@/models/IParameter";
import {FieldArray, FieldArrayMethodProps, UseFieldArrayRemove} from "react-hook-form";
import {IProductsFilterFields} from "@/webpages/Category/Category";


export interface IProductsFilterData {
    parent1Lvl?: ICategory,
    parent2Lvl?: ICategory,
    childCategory2Lvls?: ICategory[],
    childCategory3Lvls: ICategory[],
    types: IType[],
    brands: IBrand[],
    parameters: IParameter[]
}

export const useProductsFilter = (append: (value: (FieldArray<{} | ((formValues: IProductsFilterFields) => IProductsFilterFields) | IProductsFilterFields, "parameters"> | FieldArray<{} | ((formValues: IProductsFilterFields) => IProductsFilterFields) | IProductsFilterFields, "parameters">[]), options?: FieldArrayMethodProps) => void, remove: UseFieldArrayRemove) => {
    const {query} = useRouter();
    const categoryId = String(query.id);

    const queryData = useQuery(['children of category', categoryId], () => CategoryService.getChildrenById(categoryId), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий');
        },
        onSuccess: ({data}) => {
            remove();
            data.parameters?.forEach(param => append({
                parameterId: Number(param.id),
                title: param.title,
                type: param.type,
                format: param.format,
                checkbox: {
                    colorValueIds: [],
                    textValueIds: [],
                    numberValueIds: []
                },
                radio: {
                    // @ts-ignore
                    colorValueId: undefined,
                    // @ts-ignore
                    textValueId: undefined,
                    // @ts-ignore
                    numberValueId: undefined
                },
                input: {
                    // @ts-ignore
                    colorValue: undefined,
                    // @ts-ignore
                    textValue: undefined,
                    // @ts-ignore
                    numberValue: undefined,
                    // @ts-ignore
                    booleanValue: undefined
                }
            }));
        },
        enabled: !!query.id
    });

    return useMemo(() => queryData, [queryData]);
}