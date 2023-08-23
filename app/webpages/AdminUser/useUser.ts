import {useQuery} from "react-query";
import {UserService} from "@/services/UserService";

export const useUser = (id: string) => {
    const {
        isLoading,
        data: user,
        error,
        status
    } = useQuery('all products', () => UserService.getById(id), {
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, user}
}