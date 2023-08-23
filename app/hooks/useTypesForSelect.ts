import {useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {CategoryService} from "@/services/CategoryService";
import {convertCategoriesForSelect} from "@/lib/convertCategoriesForSelect";
import {TypeService} from "@/services/TypeService";
import {IType} from "@/models/IType";
import {IOption} from "@/models/IOption";


export const useTypesForSelect = () => {
    return useQuery('admin categories type select', () => TypeService.getAll(), {
        select: ({data}) => data.map(
            (type: IType): IOption => ({
                label: type.name,
                value: type.id
            })),
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке типов');
        }
    });
}