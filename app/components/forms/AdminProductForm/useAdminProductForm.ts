import {useForm} from "react-hook-form";
import {IValue} from "@/models/IValue";


export interface IProductPropertyFields {
    parameterId: number,
    valueIds: number[],
    valueId: number,
    value: IValue,
}

export interface IProductFields {
    name: string,
    description: string,
    img: string,
    categoryId: string,
    brandId: number,
    typeId: number,
    count: number,
    isDiscount: boolean,
    newPrice: number,
    price: number,
    info: IProductPropertyFields[],
}

export const useAdminProductForm = () => useForm<IProductFields>({mode: "onChange"});