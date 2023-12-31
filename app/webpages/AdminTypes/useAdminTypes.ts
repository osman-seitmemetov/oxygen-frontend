import {useMutation, useQuery} from "react-query";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useDebounce} from "@/hooks/useDebounce";
import {TypeService} from "@/services/TypeService";
import {ITableItem} from "@/models/ITableItem";

export const useAdminTypes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all types', debouncedSearch], () => TypeService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении типов')
        },
        select: ({data}) => data.map(
            (type): ITableItem => ({
                id: type.id,
                editUrl: `/admin/parameters/${type.id}`,
                items: [
                    {type: 'STRING', value: type.name}
                ],
            })
        )
    });

    const {mutateAsync: deleteAsync} = useMutation(
        'admin delete type',
        (typeId: number) => TypeService.delete(typeId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении типа')
            },
            onSuccess() {
                toastr.success('Удаление типа', 'Тип успешно удален')
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