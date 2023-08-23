import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {IPromocodeFields} from "@/types/types";
import {PromocodeService} from "@/services/PromocodeService";


export const usePromocodeEdit = (setValue: UseFormSetValue<IPromocodeFields>) => {
    const {push, query} = useRouter();
    const promocodeId = String(query.id);

    const queryData = useQuery(['admin promocode', promocodeId], () => PromocodeService.getById(promocodeId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных промокода');
        },
        enabled: !!query.id
    });

    const {mutateAsync, isLoading: isUpdateLoading} = useMutation('admin update promocode', (data: IPromocodeFields) => PromocodeService.edit(promocodeId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании промокода');
        },
        onSuccess: () => {
            toastr.success('Редактирование промокода', 'Промокод успешно изменен')
            push('/admin/promocodes').then();
        }
    });

    const onSubmit: SubmitHandler<IPromocodeFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}