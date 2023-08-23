import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {ArticleService} from "@/services/ArticleService";
import {getKeys} from "@/lib/object/getKeys";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {IArticleFields} from "@/components/forms/AdminArticleForm/useAdminArticleForm";

export const useArticleEdit = (setValue: UseFormSetValue<IArticleFields>) => {
    const {push, query} = useRouter();
    const articleId = String(query.id);

    const queryData = useQuery(['article', articleId], () => ArticleService.getById(articleId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                // @ts-ignore
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных статьи');
        },
        enabled: !!query.id
    });

    const {mutateAsync, isLoading: isUpdateLoading} = useMutation('update article', (data: IArticleFields) => ArticleService.edit(articleId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании статьи');
        },
        onSuccess: () => {
            toastr.success('Редактирование статьи', 'Статья успешно изменена')
            push('/admin/articles').then();
        }
    });

    const onSubmit: SubmitHandler<IArticleFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}