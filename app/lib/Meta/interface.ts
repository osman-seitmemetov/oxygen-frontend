import {ReactNode} from "react";

export interface ISEO {
    title: string,
    description?: string,
    image?: string,
    children?: ReactNode
}