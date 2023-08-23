import {useForm} from "react-hook-form";


export interface IFilterGroupFields {
    title: string
}

export const useAdminFilterGroupForm = () => useForm<IFilterGroupFields>({mode: "onChange"});