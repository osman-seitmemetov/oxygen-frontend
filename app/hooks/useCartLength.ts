import {useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {CartService} from "@/services/CartService";
import {useMemo} from "react";

export const useCartLength = () => {
    const queryData = useQuery('get cart length', () => CartService.get(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении размера корзины');
        },
    });

    return useMemo(() => queryData, [queryData]);
}