import {useForm} from "react-hook-form";
import {IColorValue} from "@/models/IColorValue";
import {INumberValue} from "@/models/INumberValue";
import {ITextValue} from "@/models/ITextValue";
import {IBooleanValue} from "@/models/IBooleanValue";


export interface IProductPropertyFields {
    parameterId: number,
    checkbox: {
        colorValueIds: number[],
        numberValueIds: number[],
        textValueIds: number[]
    },
    radio: {
        colorValueId: number,
        numberValueId: number,
        textValueId: number
    },
    input: {
        colorValue: IColorValue,
        numberValue: INumberValue,
        textValue: ITextValue,
        booleanValue: IBooleanValue
    },
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