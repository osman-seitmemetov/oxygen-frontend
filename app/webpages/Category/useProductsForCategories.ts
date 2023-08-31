import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {CategoryService} from "@/services/CategoryService";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {ProductService} from "@/services/ProductService";
import {useRouter} from "next/router";
import {useDebounce} from "@/hooks/useDebounce";
import {IProductsFilterFields} from "@/webpages/Category/Category";


export const useProductsForCategories = () => {
    const [productsFilterFormValues, setProductsFilterFormValues] = useState<IProductsFilterFields>();
    const debouncedProductsFilterFormValues = useDebounce(productsFilterFormValues, 400);
    const {query} = useRouter();
    const categoryId = String(query.id);

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
    } = useQuery(['products of categories', categoryId, debouncedProductsFilterFormValues], () => ProductService.getAll({
        categoryId: Number(categoryId),
        typeIds: debouncedProductsFilterFormValues?.typeIds,
        brandIds: debouncedProductsFilterFormValues?.brandIds,
        sort: debouncedProductsFilterFormValues?.sort,
        priceMin: debouncedProductsFilterFormValues?.priceMin,
        priceMax: debouncedProductsFilterFormValues?.priceMax
    }), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий');
        },
        enabled: !!query.id
    });

    return useMemo(() => ({
        category,
        isCategoryLoading,
        products,
        isProductsLoading,
        children,
        isChildrenLoading,
        setProductsFilterFormValues
    }), [category, children, isCategoryLoading, isChildrenLoading, isProductsLoading, products, setProductsFilterFormValues]);
}