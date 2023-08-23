import {useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {IOption} from "@/models/IOption";
import {FilterService} from "@/services/FilterService";
import {IFilterGroup} from "@/models/IFilterGroup";


export const useFilterGroupsForSelect = () => {
    return useQuery('admin filter_group_options', () => FilterService.getAllFilterGroups(), {
        select: ({data}) => data.map(
            (filterGroup: IFilterGroup): IOption => ({
                label: filterGroup.title,
                value: filterGroup.id
            })
        ),
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке категорий');
        }
    });
}