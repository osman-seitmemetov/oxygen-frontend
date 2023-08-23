import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {CategoryService} from "@/services/CategoryService";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";


export const useCategoriesCreate = () => {
    const {push} = useRouter();

    const {mutateAsync, isLoading} = useMutation(
        'create categories',
        (data: ICategoryFields) => CategoryService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании категории');
            },
            onSuccess() {
                toastr.success('Создание категории', 'Категория успешно создана');
                push('/admin/categories').then();
            },
        }
    )

    const onSubmit: SubmitHandler<ICategoryFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}