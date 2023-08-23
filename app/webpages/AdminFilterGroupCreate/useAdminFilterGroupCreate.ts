import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {FilterService} from "@/services/FilterService";
import {IFilterGroupFields} from "@/components/forms/AdminFilterGroupForm/useAdminFilterGroupForm";


export const useAdminFilterGroupCreate = () => {
    const {push} = useRouter();

    const {mutateAsync, isLoading} = useMutation(
        'create filterGroup',
        (data: IFilterGroupFields) => FilterService.createFilterGroup(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании группы фильтров');
            },
            onSuccess() {
                toastr.success('Создание группы фильтров', 'Группа фильтров успешно создана');
                push('/admin/filter_groups').then();
            },
        }
    )

    const onSubmit: SubmitHandler<IFilterGroupFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}