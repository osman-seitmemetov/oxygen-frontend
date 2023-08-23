import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {TypeService} from "@/services/TypeService";
import {ITypeFields} from "@/components/forms/AdminTypeForm/useAdminTypeForm";


export const useAdminTypeEdit = (setValue: UseFormSetValue<ITypeFields>) => {
    const {push, query} = useRouter();
    const typeId = String(query.id);

    const queryData = useQuery(['admin type', typeId], () => TypeService.getById(typeId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных типов');
        },
        enabled: !!query.id
    });

    const {
        mutateAsync,
        isLoading: isUpdateLoading
    } = useMutation('admin update type', (data: ITypeFields) => TypeService.edit(typeId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании типа');
        },
        onSuccess: () => {
            toastr.success('Редактирование типа', 'Тип успешно изменен')
            push('/admin/types').then();
        }
    });

    const onSubmit: SubmitHandler<ITypeFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}