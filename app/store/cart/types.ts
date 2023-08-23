import {IProduct} from "@/models/IProduct";


export enum actionTypes {
    CART_ADD_ITEMS = "CART_ADD_ITEMS",
    CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
    CART_REMOVE_ALL = "CART_REMOVE_ALL"
}

interface ICartAddItemPayload {
    product: IProduct,
    count: number
}

interface ICartAddItem {
    type: actionTypes.CART_ADD_ITEMS,
    payload: ICartAddItemPayload
}

interface ICartRemoveItem {
    type: actionTypes.CART_REMOVE_ITEM,
    payload: string // id product
}

interface ICartRemoveAll {
    type: actionTypes.CART_REMOVE_ALL,
    payload: null
}

export type TypeActionCart = ICartAddItem | ICartRemoveItem | ICartRemoveAll;