import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "@/api/interceptors";


export const fetchFavourites = createAsyncThunk<number[]>('favourites/get', async (
    _, thunkAPI
) => {
    try {
        const response = await instance.get<{user: number, events: number[]}>('/v1/favorite_list/');

        return response.data.events;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})


export const updateFavourites = createAsyncThunk<number[], {userId: number, eventIds: number[]}>('favourites/get', async (
    {userId, eventIds}, thunkAPI
) => {
    try {
        const response = await instance.put<{user: number, events: number[]}>('/v1/favorite_list/', {user: userId, events: eventIds});

        return response.data.events;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})