import {IValue} from "@/models/IValue";

export interface IProductProperty {
    id: number,
    parameterId: number,
    productId: number,
    colorValues: string[],
    numberValues: string[],
    textValues: string[],
    booleanValues: string[],
    valueIds: number[],
    valueId: number,
    value: IValue,
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