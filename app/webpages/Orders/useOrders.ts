import {useQuery} from "react-query";
import {UserService} from "@/services/UserService";
import {OrderService} from "@/services/OrderService";

export const useOrders = () => {
    const {
        isLoading,
        data: orders,
        error,
        status
    } = useQuery('all orders', () => OrderService.getAll(), {
        onSuccess: ({data}) => {

        },
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, orders}
}