import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {FilterService} from "@/services/FilterService";
import {IFilterOptionFields} from "@/components/forms/AdminFilterOptionForm/useAdminFilterOptionForm";


export const useAdminFilterOptionEdit = (setValue: UseFormSetValue<IFilterOptionFields>) => {
    const {push, query} = useRouter();
    const filterOptionId = String(query.id);

    const queryData = useQuery(['admin filterOption', filterOptionId], () => FilterService.getFilterOptionById(filterOptionId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных опций фильтров');
        },
        enabled: !!query.id
    });

    const {
        mutateAsync,
        isLoading: isUpdateLoading
    } = useMutation('admin update filterGroup', (data: IFilterOptionFields) => FilterService.editFilterOption(filterOptionId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании опций фильтров');
        },
        onSuccess: () => {
            toastr.success('Редактирование опции фильтров', 'Опция фильтров успешно изменена')
            push('/admin/filter_option').then();
        }
    });

    const onSubmit: SubmitHandler<IFilterOptionFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}