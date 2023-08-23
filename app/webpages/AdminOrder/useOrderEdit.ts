import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/lib/object/getKeys";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {IBannerFields, IOrderFields} from "@/types/types";
import {BannerService} from "@/services/BannerService";
import {OrderService} from "@/services/OrderService";


export const useOrderEdit = (setValue: UseFormSetValue<IOrderFields>) => {
    const {push, query} = useRouter();
    const orderId = String(query.id);

    const queryData = useQuery(['admin order', orderId], () => OrderService.getByIdForAdmin(orderId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных заказа');
        },
        enabled: !!query.id
    });

    // const {mutateAsync} = useMutation('admin update banner', (data: IOrderFields) => BannerService.edit(orderId, data), {
    //     onError: (error) => {
    //         toastError(error, 'Возникла ошибка при редактировании баннера');
    //     },
    //     onSuccess: ({data}) => {
    //         toastr.success('Редактирование баннера', 'Баннер успешно изменен')
    //         push('/admin/banner');
    //     }
    // });

    const onSubmit: SubmitHandler<IOrderFields> = async (data) => {
        // await mutateAsync(data);
    }

    return {onSubmit, ...queryData};
}
