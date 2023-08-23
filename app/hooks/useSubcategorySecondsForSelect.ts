import {useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {CategoryService} from "@/services/CategoryService";
import {IOption} from "@/models/IOption";
import {ISubcategorySecond} from "@/models/ISubcategorySecond";


export const useSubcategorySecondsForSelect = () => {
    return useQuery('admin subcategory_seconds', () => CategoryService.getAllSubcategorySeconds(), {
        select: ({data}) =>
            data.map(
                (subcategorySecond: ISubcategorySecond): IOption => ({
                    label: subcategorySecond.name,
                    value: String(subcategorySecond.id)
                })
            ),
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке категорий');
        }
    });
}