import {useQuery} from "react-query";
import {ChangeEvent, useMemo, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {OrderService} from "@/services/OrderService";

export const useAdminOrders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all orders', debouncedSearch], () => OrderService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении заказов');
        },
    });

    // const {mutateAsync: deleteAsync} = useMutation(
    //     'admin delete order',
    //     (orderId: string) => BannerService.delete(orderId),
    //     {
    //         onError(error) {
    //             toastError(error, 'Возникла ошибка при удалении баннера')
    //         },
    //         onSuccess() {
    //             toastr.success('Удаление баннера', 'Баннер успешно удален')
    //             queryData.refetch();
    //         },
    //     }
    // )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    return useMemo(() => ({
        // deleteAsync,
        ...queryData, handleSearch, searchTerm
    }), [queryData,
        // deleteAsync,
        searchTerm]);
}