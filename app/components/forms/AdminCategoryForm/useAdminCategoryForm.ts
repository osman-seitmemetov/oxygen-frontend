import {useForm} from "react-hook-form";


export interface ICategoryFields {
    name: string,
    description: string,
    icon: string,
    parentId: string,
    lvl: string,
    img: string,
    filterGroupIds: number[]
}

export const useAdminCategoryForm = () => useForm<ICategoryFields>({mode: "onChange"});