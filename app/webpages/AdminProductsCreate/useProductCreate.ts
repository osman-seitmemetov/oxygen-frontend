import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {ProductService} from "@/services/ProductService";
import {IProductFields} from "@/components/forms/AdminProductForm/useAdminProductForm";


export const useProductCreate = () => {
    const {push} = useRouter();

    const { mutateAsync, isLoading } = useMutation(
        'create product',
        (data: IProductFields) => ProductService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании товара');
            },
            onSuccess() {
                toastr.success('Создание товара', 'Товар успешно создан');
                push('/admin/products').then();
            },
        }
    )

    const onSubmit: SubmitHandler<IProductFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}