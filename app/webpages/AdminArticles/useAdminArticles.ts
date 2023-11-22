import {useMutation, useQuery} from "react-query";
import {ArticleService} from "@/services/ArticleService";
import {ChangeEvent, useMemo, useState} from "react";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useDebounce} from "@/hooks/useDebounce";
import {ITableItem} from "@/models/ITableItem";
import {convertPostgresDateToNormalDate} from "@/lib/date/convertPostgresDateToNormalDate";


export const useAdminArticles = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    const queryData = useQuery(['admin all articles', debouncedSearch], () => ArticleService.getAll(debouncedSearch), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при загрузке статей');
        },
        select: ({data}) => data.map(
            (article): ITableItem => ({
                id: article.id,
                editUrl: `/admin/articles/${article.id}`,
                items: [
                    {type: 'IMAGE', value: article.previewImg},
                    {type: 'STRING', value: article.title},
                    {type: 'STRING', value: convertPostgresDateToNormalDate(article.date) || ""},
                ],
            })
        )
    });

    const {mutateAsync: deleteAsync} = useMutation(
        'admin delete article',
        (articleId: number) => ArticleService.delete(articleId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении статьи');
            },
            onSuccess() {
                toastr.success('Удаление статьи', 'Статья успешно удалена');
                queryData.refetch().then();
            },
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    return useMemo(() => ({
        deleteAsync, handleSearch, searchTerm, ...queryData
    }), [deleteAsync, searchTerm, queryData]);
}