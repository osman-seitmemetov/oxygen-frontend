import { actionTypes, TypeActionCart } from "./types";
import {IProduct} from "@/models/IProduct";

const initialState: IProduct[] = [];

export const cartReducer = (state = initialState, action: TypeActionCart) => {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEMS:
            const cart = [...state];
            const { count, product } = action.payload;

            const foundProduct = cart.find(item => item.id === product.id);

            if (foundProduct) {
                foundProduct.count = count;
            } else {
                cart.push({
                    ...product,
                    count,
                })
            }

            return cart;

        // case actionTypes.CART_REMOVE_ITEM:
            // return state.filter(item => item._id !== action.payload);

        case actionTypes.CART_REMOVE_ALL:
            return [];

        default:
            return state;
    }
}