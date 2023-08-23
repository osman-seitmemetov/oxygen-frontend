import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {FilterService} from "@/services/FilterService";
import {IFilterOptionFields} from "@/components/forms/AdminFilterOptionForm/useAdminFilterOptionForm";


export const useAdminFilterOptionCreate = () => {
    const {push} = useRouter();

    const {mutateAsync, isLoading} = useMutation(
        'create filterOption',
        (data: IFilterOptionFields) => FilterService.createFilterOption(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании группы фильтров');
            },
            onSuccess() {
                toastr.success('Создание группы фильтров', 'Группа фильтров успешно создана');
                push('/admin/filter_options').then();
            },
        }
    )

    const onSubmit: SubmitHandler<IFilterOptionFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}