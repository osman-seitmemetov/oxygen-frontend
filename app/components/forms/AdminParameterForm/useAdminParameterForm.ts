import {useForm} from "react-hook-form";
import {IColorValue} from "@/models/IColorValue";
import {INumberValue} from "@/models/INumberValue";
import {ITextValue} from "@/models/ITextValue";
import {IBooleanValue} from "@/models/IBooleanValue";
import {IValue} from "@/models/IValue";


export interface IParameterFields {
    title: string,
    type: string,
    format: string,
    values: IValue[],
    savedValues: IValue[]
}

export const useAdminParameterForm = () => useForm<IParameterFields>({mode: "onChange"});