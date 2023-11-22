import {useMutation, useQuery} from "react-query";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useDebounce} from "@/hooks/useDebounce";
import {CategoryService} from "@/services/CategoryService";
import {ITableItem} from "@/models/ITableItem";

export const useAdminCategories = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all categories', debouncedSearch], () => CategoryService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий')
        },
        select: ({data}) => data.map(
            (category): ITableItem => ({
                id: category.id,
                editUrl: `/admin/categories/${category.id}`,
                items: [
                    {type: 'IMAGE', value: category.img},
                    {type: 'STRING', value: category.name}
                ],
            })
        )
    });

    const {mutateAsync: deleteAsync} = useMutation(
        'admin delete categories',
        (categoryId: number) => CategoryService.delete(categoryId),
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