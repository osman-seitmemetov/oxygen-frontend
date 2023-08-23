import {createSlice} from "@reduxjs/toolkit";
import {ICartItem} from "@/types/types";

interface cartState {
    cart: ICartItem[]
}

const initialState: cartState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartFetchingSuccess() {

        }
    }
})

export default cartSlice.reducer;