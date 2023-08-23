import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {ITypeFields} from "@/components/forms/AdminTypeForm/useAdminTypeForm";
import {TypeService} from "@/services/TypeService";


export const useAdminTypeCreate = () => {
    const {push} = useRouter();

    const {mutateAsync, isLoading} = useMutation(
        'create type',
        (data: ITypeFields) => TypeService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании типа');
            },
            onSuccess() {
                toastr.success('Создание типа', 'Тип успешно создан');
                push('/admin/types').then();
            },
        }
    )

    const onSubmit: SubmitHandler<ITypeFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}