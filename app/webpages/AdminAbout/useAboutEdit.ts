import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {AboutService} from "@/services/AboutService";
import {IAbout} from "@/models/IAbout";


export const useAboutEdit = (setValue: UseFormSetValue<IAbout>) => {
    const {push} = useRouter();

    const queryData = useQuery('admin about', () => AboutService.get(), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке раздела "О компании"');
        },
    });

    const {mutateAsync} = useMutation('admin update about', (data: IAbout) => AboutService.edit(data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании "О компании"');
        },
        onSuccess: ({data}) => {
            toastr.success('Редактирование "О компании"', 'Раздел "О компании" успешно изменен')
            push('/admin');
        }
    });

    const onSubmit: SubmitHandler<IAbout> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, ...queryData};
}