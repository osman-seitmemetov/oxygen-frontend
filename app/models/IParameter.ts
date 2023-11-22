import {IValue} from "@/models/IValue";

export interface IParameter {
    id: number,
    title: string,
    type: string,
    format: string,
    values: IValue[]
}