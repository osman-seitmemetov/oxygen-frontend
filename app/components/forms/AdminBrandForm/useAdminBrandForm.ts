import {useForm} from "react-hook-form";


export interface IBrandFields {
    name: string,
    description: string,
    logo: string,
    typeIds: string[]
}

export const useAdminBrandForm = () => useForm<IBrandFields>({mode: "onChange"});