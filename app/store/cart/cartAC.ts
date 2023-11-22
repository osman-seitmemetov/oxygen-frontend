import {createAsyncThunk} from "@reduxjs/toolkit";
import {ICart, ICartProduct} from "@/models/ICart";
import {CartService} from "@/services/CartService";


export const fetchCart = createAsyncThunk<ICart>('cart/get', async (
    _, thunkAPI
) => {
    try {
        const response = await CartService.get();

        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

export const addProductToAuthCart = createAsyncThunk<ICartProduct, { productId: number }>('cart/add', async (
    {productId}, thunkAPI
) => {
    try {
        const response = await CartService.addToCart({productId});
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

export const deleteProductFromAuthCart = createAsyncThunk<string, { productId: number }>('cart/delete', async (
    {productId}, thunkAPI
) => {
    try {
        const response = await CartService.deleteFromCart({productId});

        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})


// export const updateCart = createAsyncThunk<number[], { userId: number, eventIds: number[] }>('favourites/get', async (
//     {userId, eventIds}, thunkAPI
// ) => {
//     try {
//         const response = await instance.put<{ user: number, events: number[] }>('/v1/favorite_list/', {user: userId, events: eventIds});
//
//         return response.data.events;
//     } catch (error) {
//         console.log(error);
//         return thunkAPI.rejectWithValue(error);
//     }
// })