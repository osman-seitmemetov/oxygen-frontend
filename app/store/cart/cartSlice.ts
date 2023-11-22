import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartProduct} from "@/models/ICart";
import {addProductToAuthCart, deleteProductFromAuthCart, fetchCart} from "@/store/cart/cartAC";


interface cartState {
    isLoading: boolean,
    state: {
        id?: number,
        count: number,
        deliverySum: number,
        sum: number,
        globalSum: number,
        discount: number,
    },
    isProductLoading: {
        value: boolean,
        productId?: number
    },
    items: ICartProduct[]
}

const initialState: cartState = {
    isLoading: false,
    state: {
        id: undefined,
        count: 0,
        deliverySum: 0,
        sum: 0,
        globalSum: 0,
        discount: 0,
    },
    isProductLoading: {
        value: false,
        productId: undefined
    },
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<ICartProduct>) {
            state.items = [...state.items, action.payload];
            state.state.count += action.payload.count;
        },

        deleteProductFromCart(state, action: PayloadAction<ICartProduct>) {
            state.items = state.items.filter(cartProduct => cartProduct.product.id !== action.payload.product.id);
            state.state.count -= action.payload.count;
        },

        deleteAllFromCart(state) {
            state.items = [];
        },

        setProductIdForLoading(state, action: PayloadAction<number>) {
            state.isProductLoading.productId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, state => {
            state.isLoading = true;
        }).addCase(fetchCart.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.state.id = payload.id;
            state.state.count = payload.count;
            state.state.deliverySum = payload.deliverySum;
            state.state.sum = payload.sum;
            state.state.globalSum = payload.globalSum;
            state.state.discount = payload.discount;
            state.items = payload.items
        }).addCase(fetchCart.rejected, state => {
            state.isLoading = false;
        }).addCase(addProductToAuthCart.pending, state => {
            state.isProductLoading.value = true;
        }).addCase(addProductToAuthCart.fulfilled, (state, {payload}) => {
            state.items = [...state.items, payload];
            state.state.count += payload.count;
            state.isProductLoading.productId = undefined;
            state.isProductLoading.value = false;
        }).addCase(addProductToAuthCart.rejected, state => {
            state.isProductLoading.productId = undefined;
            state.isProductLoading.value = false;
        }).addCase(deleteProductFromAuthCart.pending, state => {
            state.isProductLoading.value = true;
        }).addCase(deleteProductFromAuthCart.fulfilled, state => {
            state.isProductLoading.productId = undefined;
            state.isProductLoading.value = false;
        }).addCase(deleteProductFromAuthCart.rejected, state => {
            state.isProductLoading.productId = undefined;
            state.isProductLoading.value = false;
        })
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;