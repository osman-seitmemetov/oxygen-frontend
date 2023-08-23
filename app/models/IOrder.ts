import {IProduct} from "@/models/IProduct";

export enum orderStatuses {
    NOT_PAID = "NOT_PAID",
    PAID = "PAID",
    DELIVERED = "DELIVERED"
}

export enum orderTypes {
    PARCEL = "PARCEL"
}

export interface IOrder {
    id: number,
    userId: number,
    status: orderStatuses,
    deliveryAddress: string,
    requestDate: string,
    deliveryDate: string,
    orderSum: number,
    deliverySum: number,
    globalSum: number,
    type: orderTypes,
    order_products: IProduct[]
}