import {useForm} from "react-hook-form";


export interface IBannerFields {
    title: string,
    text: string,
    img: string,
    link: string,
    color?: string
}

export const useAdminBannerForm = () => useForm<IBannerFields>({mode: "onChange"});