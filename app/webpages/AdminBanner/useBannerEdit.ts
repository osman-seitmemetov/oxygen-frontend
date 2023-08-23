import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {IBannerFields} from "@/types/types";
import {BannerService} from "@/services/BannerService";


export const useBannerEdit = (setValue: UseFormSetValue<IBannerFields>) => {
    const {push, query} = useRouter();
    const bannerId = String(query.id);

    const queryData = useQuery(['admin banner', bannerId], () => BannerService.getById(bannerId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных баннера');
        },
        enabled: !!query.id
    });

    const {mutateAsync, isLoading: isUpdateLoading} = useMutation('admin update banner', (data: IBannerFields) => BannerService.edit(bannerId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании баннера');
        },
        onSuccess: () => {
            toastr.success('Редактирование баннера', 'Баннер успешно изменен')
            push('/admin/banner').then();
        }
    });

    const onSubmit: SubmitHandler<IBannerFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}
