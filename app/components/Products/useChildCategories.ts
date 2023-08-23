import {useMemo} from "react";
import {useQuery} from "react-query";
import {CategoryService} from "@/services/CategoryService";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {useRouter} from "next/router";


export const useChildCategories = () => {
    const {query} = useRouter();
    const categoryId = String(query.id);

    const queryData = useQuery(['children of category', categoryId], () => CategoryService.getChildrenById(categoryId), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении категорий');
        },
        enabled: !!query.id
    });

    return useMemo(() => ({...queryData}), [queryData]);
}