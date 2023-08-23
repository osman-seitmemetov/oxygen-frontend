import {useMemo} from "react";
import {useQuery} from "react-query";
import {CategoryService} from "@/services/CategoryService";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {ProductService} from "@/services/ProductService";
import {useRouter} from "next/router";


export const useProductsForCategories = () => {
    const {query} = useRouter();
    const categoryId = String(query.id);
    console.log(categoryId)

    const {
        data: category,
        isLoading: isCategoryLoading
    } = useQuery(['category', categoryId], () => CategoryService.getById(categoryId), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий')
        },
        enabled: !!query.id
    });

    const {
        data: children,
        isLoading: isChildrenLoading
    } = useQuery(['children of category', categoryId], () => CategoryService.getChildrenById(categoryId), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий');
        },
        enabled: !!query.id
    });

    const {
        data: products,
        isLoading: isProductsLoading
    } = useQuery(['products of categories', categoryId], () => ProductService.getAll({categoryId: Number(categoryId)}), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий');
        },
        enabled: !!query.id
    });

    return useMemo(() => ({
        category, isCategoryLoading, products, isProductsLoading, children, isChildrenLoading
    }), [category, children, isCategoryLoading, isChildrenLoading, isProductsLoading, products]);
}