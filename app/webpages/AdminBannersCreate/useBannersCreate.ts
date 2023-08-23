import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {IBannerFields, ICategoryFields} from "@/types/types";
import {BannerService} from "@/services/BannerService";


export const useBannersCreate = () => {
    const {push} = useRouter();

    const { mutateAsync, isLoading } = useMutation(
        'create banner',
        (data: IBannerFields) => BannerService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании баннера');
            },
            onSuccess() {
                toastr.success('Создание баннера', 'Баннер успешно создан');
                push('/admin/banner');
            },
        }
    )

    const onSubmit: SubmitHandler<IBannerFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}