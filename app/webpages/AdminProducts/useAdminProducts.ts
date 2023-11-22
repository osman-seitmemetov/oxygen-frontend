import {useMutation, useQuery} from "react-query";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {ProductService} from "@/services/ProductService";
import {useDebounce} from "@/hooks/useDebounce";
import {ITableItem} from "@/models/ITableItem";

export const useAdminProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 200);

    const queryData = useQuery(['admin all products', debouncedSearch], () => ProductService.getAll({term: debouncedSearch}), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении товаров')
        },
        select: ({data}) => data.map(
            (product): ITableItem => ({
                id: product.id,
                editUrl: `/admin/products/${product.id}`,
                items: [
                    {type: 'IMAGE', value: product.img},
                    {type: 'STRING', value: product.name},
                    {type: 'STRING', value: String(product.price)},
                    {type: 'STRING', value: String(product.count)}
                ],
            })
        )
    });

    const {mutateAsync: deleteAsync} = useMutation(
        'admin delete product',
        (productId: number) => ProductService.delete(productId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении товара')
            },
            onSuccess() {
                toastr.success('Удаление товара', 'Товар успешно удален')
                queryData.refetch().then();
            },
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    return useMemo(() => ({
        deleteAsync, ...queryData, handleSearch, searchTerm
    }), [queryData, deleteAsync, searchTerm]);
}