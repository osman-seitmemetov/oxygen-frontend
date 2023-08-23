import {useMutation, useQuery} from "react-query";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useDebounce} from "@/hooks/useDebounce";
import {FilterService} from "@/services/FilterService";


export const useAdminFilterOptions = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all filter_option', debouncedSearch], () => FilterService.getAllFilterOptions(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий')
        },
    });

    const {mutateAsync: deleteAsync} = useMutation(
        'admin delete filter_option',
        (filterOptionId: string) => FilterService.deleteFilterOption(filterOptionId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении группы фильтров');
            },
            onSuccess() {
                toastr.success('Удаление категории', 'Группа фильтров успешно удалена');
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