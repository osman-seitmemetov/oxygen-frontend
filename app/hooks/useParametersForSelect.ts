import {useQuery} from "react-query";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {IOption} from "@/models/IOption";
import {ParameterService} from "@/services/ParameterService";
import {IParameter} from "@/models/IParameter";


export const useParametersForSelect = () => {
    return useQuery('admin parameters_options', () => ParameterService.getAll(), {
        select: ({data}) => data.map(
            (parameter: IParameter): IOption => ({
                label: parameter.title,
                value: parameter.id
            })
        ),
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке характеристик');
        }
    });
}