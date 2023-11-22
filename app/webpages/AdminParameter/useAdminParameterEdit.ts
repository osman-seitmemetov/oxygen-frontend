import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {ParameterService} from "@/services/ParameterService";
import {IParameterFields} from "@/components/forms/AdminParameterForm/useAdminParameterForm";


export const useAdminParameterEdit = (setValue: UseFormSetValue<IParameterFields>) => {
    const {push, query} = useRouter();
    const parameterId = String(query.id);

    const queryData = useQuery(['admin parameter', parameterId], () => ParameterService.getById(parameterId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
            setValue("values", []);
            setValue("savedValues", data.values);
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных характеристики');
        },
        enabled: !!query.id
    });

    const {
        mutateAsync,
        isLoading: isUpdateLoading
    } = useMutation('admin update parameter', (data: IParameterFields) => ParameterService.edit(parameterId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании характеристики');
        },
        onSuccess: () => {
            toastr.success('Редактирование характеристики', 'Характеристика успешно изменена')
            push('/admin/parameters').then();
        }
    });

    const onSubmit: SubmitHandler<IParameterFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}