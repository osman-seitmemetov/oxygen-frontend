import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {IFilterGroupFields} from "@/components/forms/AdminFilterGroupForm/useAdminFilterGroupForm";
import {FilterService} from "@/services/FilterService";


export const useAdminFilterGroupEdit = (setValue: UseFormSetValue<IFilterGroupFields>) => {
    const {push, query} = useRouter();
    const filterGroupId = String(query.id);

    const queryData = useQuery(['admin filterGroup', filterGroupId], () => FilterService.getFilterGroupById(filterGroupId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                // @ts-ignore
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных категории');
        },
        enabled: !!query.id
    });

    const {
        mutateAsync,
        isLoading: isUpdateLoading
    } = useMutation('admin update filterGroup', (data: IFilterGroupFields) => FilterService.editFilterGroup(filterGroupId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании категории');
        },
        onSuccess: () => {
            toastr.success('Редактирование категории', 'Категория успешно изменена')
            push('/admin/filter_groups').then();
        }
    });

    const onSubmit: SubmitHandler<IFilterGroupFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}