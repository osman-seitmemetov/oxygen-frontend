import {useMutation, useQuery} from "react-query";
import {CartService} from "@/services/CartService";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useMemo} from "react";

export const useCart = () => {
    const queryData = useQuery('get cart', () => CartService.get(), {
        onError: (error: any) => {
            toastError(error.message)
        }
    });

    const {mutateAsync: deleteByIdAsync, } = useMutation(
        'delete cart product',
        (cartProductId: string) => CartService.deleteById(cartProductId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении товара из корзины')
            },
            onSuccess() {
                // toastr.success('Удаление промокода', 'Промокод успешно удален')
                queryData.refetch();
            },
        }
    )

    const {mutateAsync: deleteAllAsync} = useMutation(
        'delete all cart product',
        () => CartService.deleteAll(),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении товаров из корзины')
            },
            onSuccess({data}) {
                toastr.success('Очистка корзины', data);
                queryData.refetch();
            },
        }
    )

    const {mutateAsync: changeCountAsync} = useMutation('change count cart product',
        (data: { id: string, count: number }) => CartService.changeCount(data.id, data.count), {
            onError: (error) => {
                toastError(error, 'Возникла ошибка при измении количества');
            }
        });

    return useMemo(() => ({
        ...queryData, deleteAllAsync, deleteByIdAsync, changeCountAsync
    }), [queryData, deleteAllAsync, deleteByIdAsync, changeCountAsync]);
}