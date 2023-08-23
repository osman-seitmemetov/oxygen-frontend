import {useQuery} from "react-query";
import {ProductService} from "@/services/ProductService";

export const useProducts = () => {
    const {
        isLoading,
        data: products,
        error,
        status
    } = useQuery('all products', () => ProductService.getAll(), {
        onSuccess: ({data}) => {

        },
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, products}
}