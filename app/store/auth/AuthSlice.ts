import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "@/models/IUser";
import {checkAuth, editProfile, login, logout, registration} from "@/store/auth/AuthActionCreators";
import {getStoreLocal} from "@/lib/localStorage";


interface authState {
    user: IUser | null,
    isLoading: boolean
}

const initialState: authState = {
    user: getStoreLocal('user'),
    isLoading: false
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registration.pending, state => {
            state.isLoading = true;
        }).addCase(registration.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user
        }).addCase(registration.rejected, state => {
            state.isLoading = false;
            state.user = null;
        }).addCase(login.pending, state => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user
        }).addCase(login.rejected, state => {
            state.isLoading = false;
            state.user = null;
        }).addCase(logout.fulfilled, (state) => {
            state.isLoading = false;
            state.user = null
        }).addCase(checkAuth.fulfilled, (state, {payload}) => {
            if(localStorage.getItem('token') !== payload.accessToken) state.user = payload.user;
        }).addCase(editProfile.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload;
        })
    }
})

export const { reducer } = authSlice;