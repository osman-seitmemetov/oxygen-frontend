import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {IBrandFields} from "@/components/forms/AdminBrandForm/useAdminBrandForm";
import {BrandService} from "@/services/BrandService";


export const useAdminBrandEdit = (setValue: UseFormSetValue<IBrandFields>) => {
    const {push, query} = useRouter();
    const brandId = String(query.id);

    const queryData = useQuery(['admin brand', brandId], () => BrandService.getById(brandId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных бренда');
        },
        enabled: !!query.id
    });

    const {
        mutateAsync,
        isLoading: isUpdateLoading
    } = useMutation('admin update brand', (data: IBrandFields) => BrandService.edit(brandId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании бренда');
        },
        onSuccess: () => {
            toastr.success('Редактирование бренда', 'Бренд успешно изменен')
            push('/admin/brands').then();
        }
    });

    const onSubmit: SubmitHandler<IBrandFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}