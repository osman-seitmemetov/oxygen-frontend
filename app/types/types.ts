import {genderTypes} from "@/models/IUser";
import {orderStatuses} from "@/models/IOrder";

export interface IRegistrationFields {
    phone: string,
    birthday: Date,
    lastname: string,
    firstname: string,
    gender: genderTypes,
    email: string
}

export interface IProfileFields {
    phone: string,
    birthday: Date,
    lastname: string,
    firstname: string,
    gender: genderTypes,
    email: string
}

export interface IOrderFields {
    status: orderStatuses,
    deliveryDate: string,
}

export interface IFAQItem {
    _id: number
    title: string
    text: string
}

// export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IRegistration {
    firstname: string,
    password: string,
    lastname: string,
    email: string,
    birthday: Date,
    gender: genderTypes,
    phone: string,
}

export interface ILogin {
    email: string,
    password: string
}

export class ICartItem {
}