import {useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {CategoryService} from "@/services/CategoryService";
import {IOption} from "@/models/IOption";
import {ISubcategoryFirst} from "@/models/ISubcategoryFirst";


export const useSubcategoryFirstsForSelect = () => {
    return useQuery('admin subcategory_firsts', () => CategoryService.getAllSubcategoryFirsts(), {
        select: ({data}) =>
            data.map(
                (subcategoryFirst: ISubcategoryFirst): IOption => ({
                    label: subcategoryFirst.name,
                    value: String(subcategoryFirst.id)
                })
            ),
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке категорий');
        }
    });
}