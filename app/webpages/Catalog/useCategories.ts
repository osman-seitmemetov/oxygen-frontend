import {useMemo} from "react";
import {useQuery} from "react-query";
import {CategoryService} from "@/services/CategoryService";
import {toastError} from "@/lib/api/withToastrErrorRedux";

export const useCategories = () => {
    const queryData = useQuery('all categories', () => CategoryService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий')
        },
    });

    return useMemo(() => queryData, [queryData]);
}