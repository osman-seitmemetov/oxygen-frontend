import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {CategoryService} from "@/services/CategoryService";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";


export const useCategoryEdit = (setValue: UseFormSetValue<ICategoryFields>) => {
    const {push, query} = useRouter();
    const categoryId = String(query.id);

    const queryData = useQuery(['admin categories', categoryId], () => CategoryService.getById(categoryId), {
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
    } = useMutation('admin update categories', (data: ICategoryFields) => CategoryService.edit(categoryId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании категории');
        },
        onSuccess: () => {
            toastr.success('Редактирование категории', 'Категория успешно изменена')
            push('/admin/categories').then();
        }
    });

    const onSubmit: SubmitHandler<ICategoryFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}