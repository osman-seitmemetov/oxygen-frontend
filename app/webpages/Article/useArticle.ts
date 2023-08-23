import {useQuery} from "react-query";
import {BannerService} from "@/services/BannerService";
import {ArticleService} from "@/services/ArticleService";

export const useArticle = (id: string) => {
    const {
        isLoading,
        data,
        error,
        status
    } = useQuery('all products', () => ArticleService.getByIdPublic(id), {
        onSuccess: ({data}) => {

        },
        onError: (error: any) => {
            alert(error.message)
        },
    });
    const article = data?.data;
    console.log('hook', id)

    return {isLoading, article}
}