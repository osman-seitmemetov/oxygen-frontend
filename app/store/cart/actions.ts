import { actionTypes } from "./types";
import {IProduct} from "@/models/IProduct";

export const addToCart = (product: IProduct, count: number) => ({
    type: actionTypes.CART_ADD_ITEMS,
    payload: {product, count}
})

export const removeFromCart = (productId: string | number) => ({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: productId
})

export const removeAllCart = () => ({
    type: actionTypes.CART_REMOVE_ALL,
    payload: null
})