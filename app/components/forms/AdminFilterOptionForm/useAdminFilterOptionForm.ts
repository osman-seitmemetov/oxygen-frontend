import {useForm} from "react-hook-form";


export interface IFilterOptionFields {
    title: string,
    filterGroupId: string
}

export const useAdminFilterOptionForm = () => useForm<IFilterOptionFields>({mode: "onChange"});