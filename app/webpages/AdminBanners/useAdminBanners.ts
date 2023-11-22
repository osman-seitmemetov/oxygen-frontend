import {useMutation, useQuery} from "react-query";
import {BannerService} from "@/services/BannerService";
import {ChangeEvent, useMemo, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {ITableItem} from "@/models/ITableItem";

export const useAdminBanners = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all banners', debouncedSearch], () => BannerService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении баннеров')
        },
        select: ({data}) => data.map(
            (banner): ITableItem => ({
                id: banner.id,
                editUrl: `/admin/banners/${banner.id}`,
                items: [
                    {type: 'IMAGE', value: banner.img},
                    {type: 'STRING', value: banner.title}
                ],
            })
        )
    });

    const {mutateAsync: deleteAsync} = useMutation(
        'admin delete banner',
        (bannerId: number) => BannerService.delete(bannerId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении баннера')
            },
            onSuccess() {
                toastr.success('Удаление баннера', 'Баннер успешно удален')
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