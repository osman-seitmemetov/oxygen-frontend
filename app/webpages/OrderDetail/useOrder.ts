import {useQuery} from "react-query";
import {UserService} from "@/services/UserService";
import {OrderService} from "@/services/OrderService";

export const useOrder = (id: string) => {
    const {
        isLoading,
        data: order,
        error,
        status
    } = useQuery('all orders', () => OrderService.getById(id), {
        onSuccess: ({data}) => {

        },
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, order}
}