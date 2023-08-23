import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {IBrandFields} from "@/components/forms/AdminBrandForm/useAdminBrandForm";
import {BrandService} from "@/services/BrandService";


export const useAdminBrandCreate = () => {
    const {push} = useRouter();

    const {mutateAsync, isLoading} = useMutation(
        'create brand',
        (data: IBrandFields) => BrandService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании бренда');
            },
            onSuccess() {
                toastr.success('Создание бренда', 'Категория успешно создана');
                push('/admin/brands').then();
            },
        }
    )

    const onSubmit: SubmitHandler<IBrandFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}