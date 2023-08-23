import {useMemo} from "react";
import {useQuery} from "react-query";
import {CategoryService} from "@/services/CategoryService";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {useRouter} from "next/router";
import {TypeService} from "@/services/TypeService";
import {BrandService} from "@/services/BrandService";


export const useProductsFilter = () => {
    const {query} = useRouter();
    const categoryId = String(query.id);

    const {
        data: childrenData,
        isLoading: isChildrenLoading
    } = useQuery(['children of category', categoryId], () => CategoryService.getChildrenById(categoryId), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий');
        },
        enabled: !!query.id
    });

    const {
        data: typesData,
        isLoading: isTypesLoading
    } = useQuery(['all types for filter'], () => TypeService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий');
        },
    });

    const {
        data: brandsData,
        isLoading: isBrandsLoading
    } = useQuery(['all brands for filter'], () => BrandService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий');
        },
    });

    return useMemo(() => ({
        childrenData, isChildrenLoading, typesData, isTypesLoading, brandsData, isBrandsLoading
    }), [brandsData, childrenData, isBrandsLoading, isChildrenLoading, isTypesLoading, typesData]);
}