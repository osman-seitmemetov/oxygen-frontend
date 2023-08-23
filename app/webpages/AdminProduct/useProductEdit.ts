import {FieldArray, FieldArrayMethodProps, SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {ProductService} from "@/services/ProductService";
import {IProductFields} from "@/components/forms/AdminProductForm/useAdminProductForm";
import {useEffect, useState} from "react";


export const useProductEdit = (setValue: UseFormSetValue<IProductFields>, append: (value: (FieldArray<{} | ((formValues: IProductFields) => IProductFields) | IProductFields, "info"> | FieldArray<{} | ((formValues: IProductFields) => IProductFields) | IProductFields, "info">[]), options?: FieldArrayMethodProps) => void) => {
    const {push, query} = useRouter();
    const productId = String(query.id);
    const [data, setData] = useState<IProductFields>();

    useEffect(() => {
        if (data?.typeId) {
            const parametersData = ProductService.getAllParametersByTypeId(String(data.typeId));

            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })

            const parameterIds = data.info.map(i => i.parameterId);

            console.log("__parameterIds__", parameterIds)

            parametersData.then(data => {
                data.data.forEach(parameter => {
                    if (parameterIds.find(parameterId => Number(parameterId) === Number(parameter.id))) return;

                    return append({
                        parameterId: Number(parameter.id),
                        checkbox: {
                            colorValueIds: [],
                            numberValueIds: [],
                            textValueIds: []
                        },
                        radio: {
                            // @ts-ignore
                            colorValueId: null,
                            // @ts-ignore
                            numberValueId: null,
                            // @ts-ignore
                            textValueId: null
                        },
                        input: {
                            // @ts-ignore
                            colorValue: {},
                            // @ts-ignore
                            numberValue: {},
                            // @ts-ignore
                            textValue: {},
                            // @ts-ignore
                            booleanValue: {}
                        },
                    })
                });
            })
        }
    }, [append, data, setValue]);

    const queryData = useQuery(['admin product', productId], () => ProductService.getById(productId), {
        onSuccess: ({data}) => {
            setData(data);
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных товара');
        },
        enabled: !!query.id
    });

    const {
        mutateAsync,
        isLoading: isUpdateLoading
    } = useMutation('admin update product', (data: IProductFields) => ProductService.edit(productId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании товара');
        },
        onSuccess: () => {
            toastr.success('Редактирование товара', 'Товар успешно изменён')
            push('/admin/products').then();
        }
    });

    const onSubmit: SubmitHandler<IProductFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}