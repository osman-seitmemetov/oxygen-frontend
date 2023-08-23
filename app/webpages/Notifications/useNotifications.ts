import {useQuery} from "react-query";
import {NotificationsService} from "@/services/NotificationsService";

export const useNotifications = () => {
    const {
        isLoading,
        data: notifications,
        error,
        status
    } = useQuery('all orders', () => NotificationsService.getAll(), {
        onSuccess: ({data}) => {

        },
        onError: (error: any) => {
            alert(error.message)
        },
    });

    return {isLoading, notifications}
}