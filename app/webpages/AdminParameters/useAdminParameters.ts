import {useMutation, useQuery} from "react-query";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useDebounce} from "@/hooks/useDebounce";
import {ParameterService} from "@/services/ParameterService";

export const useAdminParameters = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all parameters', debouncedSearch], () => ParameterService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении характеристик')
        },
    });

    const {mutateAsync: deleteAsync} = useMutation(
        'admin delete parameters',
        (parameterId: string) => ParameterService.delete(parameterId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении характеристики')
            },
            onSuccess() {
                toastr.success('Удаление характеристики', 'Характеристика успешно удалена')
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