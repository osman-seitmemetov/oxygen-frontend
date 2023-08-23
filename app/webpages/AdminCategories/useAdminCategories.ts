import {useMutation, useQuery} from "react-query";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {ProductService} from "@/services/ProductService";
import {useDebounce} from "@/hooks/useDebounce";
import {CategoryService} from "@/services/CategoryService";

export const useAdminCategories = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all categories', debouncedSearch], () => CategoryService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий')
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
                queryData.refetch();
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