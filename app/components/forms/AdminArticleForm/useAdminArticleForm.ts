import {useForm} from "react-hook-form";

export interface IArticleFields {
    title: string
    text: string,
    previewImg: string,
    bannerImg: string
}

export const useAdminArticleForm = () => useForm<IArticleFields>({mode: "onChange"});