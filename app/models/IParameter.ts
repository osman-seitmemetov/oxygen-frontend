import {IColorValue} from "@/models/IColorValue";
import {INumberValue} from "@/models/INumberValue";
import {ITextValue} from "@/models/ITextValue";
import {IBooleanValue} from "@/models/IBooleanValue";

export interface IParameter {
    id: string,
    title: string,
    type: string,
    format: string,
    colorValues: IColorValue[],
    numberValues: INumberValue[],
    textValues: ITextValue[],
    booleanValues: IBooleanValue[],
}