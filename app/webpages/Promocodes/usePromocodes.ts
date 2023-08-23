import {useQuery} from "react-query";
import {PromocodeService} from "@/services/PromocodeService";
import {ProfileService} from "@/services/ProfileService";
import {toastError} from "@/lib/api/withToastrErrorRedux";

export const usePromocodes = () => {
    const {
        isLoading,
        data: userPromocodes,
        error,
        status
    } = useQuery('all user promocodes', () => ProfileService.getAllPromocodes(), {
        onSuccess: ({data}) => {
            console.log(data)
        },
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при загрузке промокодов')
            alert(error.message)
        },
    });

    return {isLoading, userPromocodes}
}