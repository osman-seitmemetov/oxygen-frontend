import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {ArticleService} from "@/services/ArticleService";
import {useRouter} from "next/router";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {IArticleFields} from "@/components/forms/AdminArticleForm/useAdminArticleForm";

export const useArticleCreate = () => {
    const {push} = useRouter();

    const { mutateAsync, isLoading } = useMutation(
        'create article',
        (data: IArticleFields) => ArticleService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании статьи');
            },
            onSuccess({ data: _id }) {
                toastr.success('Создание статьи', 'Статья успешно создана');
                push('/admin/articles').then();
            },
        }
    )

    const onSubmit: SubmitHandler<IArticleFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}