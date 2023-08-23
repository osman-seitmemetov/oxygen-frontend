import {useMutation, useQuery} from "react-query";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useDebounce} from "@/hooks/useDebounce";
import {CategoryService} from "@/services/CategoryService";
import {BrandService} from "@/services/BrandService";

export const useAdminBrands = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all brands', debouncedSearch], () => BrandService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении брендов')
        },
    });

    const {mutateAsync: deleteAsync} = useMutation(
        'admin delete categories',
        (categoryId: string) => CategoryService.delete(categoryId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении категории')
            },
            onSuccess() {
                toastr.success('Удаление категории', 'Категория успешно удалена')
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