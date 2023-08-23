import {useForm} from "react-hook-form";
import {IColorValue} from "@/models/IColorValue";
import {INumberValue} from "@/models/INumberValue";
import {ITextValue} from "@/models/ITextValue";
import {IBooleanValue} from "@/models/IBooleanValue";


export interface IParameterFields {
    title: string,
    type: string,
    format: string,
    booleanValues: IBooleanValue[],
    textValues: ITextValue[],
    numberValues: INumberValue[],
    colorValues: IColorValue[],
}

export const useAdminParameterForm = () => useForm<IParameterFields>({mode: "onChange"});