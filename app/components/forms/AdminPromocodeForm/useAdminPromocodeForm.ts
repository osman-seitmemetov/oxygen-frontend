import {useForm} from "react-hook-form";


export interface IPromocodeFields {
    title: string,
    categoriesId: string[],
    value: string,
    categories: string[]
}

export const useAdminPromocodeForm = () => useForm<IPromocodeFields>({mode: "onChange"});