import {useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {CategoryService} from "@/services/CategoryService";
import {convertCategoriesForSelect} from "@/lib/convertCategoriesForSelect";


export const useCategoriesForSelect = (params: {
    withoutThird?: boolean,
    withoutSecond?: boolean,
    withoutFirst?: boolean
}) => {
    return useQuery('admin categories select', () => CategoryService.getAll(), {
        select: ({data}) => convertCategoriesForSelect(data, params),
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке категорий');
        }
    });
}