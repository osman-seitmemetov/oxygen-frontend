import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {PromocodeService} from "@/services/PromocodeService";
import {IPromocodeFields} from "@/types/types";


export const usePromocodesCreate = () => {
    const {push} = useRouter();

    const { mutateAsync, isLoading } = useMutation(
        'create promocode',
        (data: IPromocodeFields) => PromocodeService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании промокода');
            },
            onSuccess() {
                toastr.success('Создание промокода', 'Промокод успешно создан');
                push('/admin/promocodes').then();
            },
        }
    )

    const onSubmit: SubmitHandler<IPromocodeFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}