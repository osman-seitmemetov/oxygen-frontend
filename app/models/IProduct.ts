import {IColorValue} from "@/models/IColorValue";
import {INumberValue} from "@/models/INumberValue";
import {ITextValue} from "@/models/ITextValue";
import {IBooleanValue} from "@/models/IBooleanValue";

export interface IProductProperty {
    id: number,
    parameterId: number,
    productId: number,
    colorValues: string[],
    numberValues: string[],
    textValues: string[],
    booleanValues: string[],
    colorValue: IColorValue,
    numberValue: INumberValue,
    textValue: ITextValue,
    booleanValue: IBooleanValue,
}

export interface IProduct {
    id: number,
    description: string
    name: string,
    img: string,
    count: number
    price: number,
    newPrice?: number,
    categoryId: number,
    brandId: number,
    typeId: number,
    isDiscount?: boolean,
    info?: IProductProperty[]
}