import {useMutation, useQuery} from "react-query";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {ProductService} from "@/services/ProductService";
import {useDebounce} from "@/hooks/useDebounce";
import {PromocodeService} from "@/services/PromocodeService";

export const useAdminPromocodes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all promocodes', debouncedSearch], () => PromocodeService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении промокодов')
        },
    });

    const { mutateAsync: deleteAsync } = useMutation(
        'admin delete product',
        (productId: string) => PromocodeService.delete(productId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении промокода')
            },
            onSuccess() {
                toastr.success('Удаление промокода', 'Промокод успешно удален')
                queryData.refetch();
            },
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    return useMemo(() => ({
            deleteAsync, ...queryData, handleSearch, searchTerm
    }),[queryData, deleteAsync, searchTerm]);
}