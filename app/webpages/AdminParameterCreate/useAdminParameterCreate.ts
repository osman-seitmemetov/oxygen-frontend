import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {ParameterService} from "@/services/ParameterService";
import {IParameterFields} from "@/components/forms/AdminParameterForm/useAdminParameterForm";


export const useAdminParameterCreate = () => {
    const {push} = useRouter();

    const {mutateAsync, isLoading} = useMutation(
        'create parameter',
        (data: IParameterFields) => ParameterService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании характеристики');
            },
            onSuccess() {
                toastr.success('Создание характеристики', 'Характеристика успешно создана');
                push('/admin/parameters').then();
            },
        }
    )

    const onSubmit: SubmitHandler<IParameterFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}