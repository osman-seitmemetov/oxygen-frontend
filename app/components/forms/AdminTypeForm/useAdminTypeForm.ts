import {useForm} from "react-hook-form";


export interface ITypeFields {
    name: string,
    categoryId: string,
    parameterIds: number[]
}

export const useAdminTypeForm = () => useForm<ITypeFields>({mode: "onChange"});