import {useMutation, useQuery} from "react-query";
import {UserService} from "@/services/UserService";
import {ChangeEvent, useMemo, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";

export const useUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all users', debouncedSearch], () => UserService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении пользователей');
        },
    });

    const {mutateAsync: deleteAsync} = useMutation(
        'admin delete user',
        (productId: string) => UserService.delete(productId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении пользователя')
            },
            onSuccess() {
                toastr.success('Удаление пользователя', 'Пользователь успешно удален')
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