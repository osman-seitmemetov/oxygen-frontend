import {LoginResponse} from "@/models/response/LoginResponse";
import {AuthService} from "@/services/AuthService";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {RegistrationResponse} from "@/models/response/RegistrationResponse";
import {ILogin, IRegistration} from "@/types/types";
import {axiosClassic} from "@/api/interceptots";
import {IUser} from "@/models/IUser";
import {IEditData, UserService} from "@/services/UserService";
import {saveToStorage} from "@/lib/auth/saveToStorage";


export const login = createAsyncThunk<LoginResponse, ILogin>('auth/login', async (
    {email, password}, thunkAPI
) => {
    try {
        const response = await AuthService.login(email, password);

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const registration = createAsyncThunk<RegistrationResponse, IRegistration>('auth/registration', async (
    {
        email,
        password,
        gender,
        lastname,
        firstname,
        phone,
        birthday
    }, thunkAPI
) => {
    try {
        const response = await AuthService.registration(
            email, password, gender,
            lastname, firstname, phone, birthday
        );

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const editProfile = createAsyncThunk<IUser, IEditData>('user/edit', async (
    {
        email,
        password,
        gender,
        lastname,
        firstname,
        phone,
        birthDay
    }, thunkAPI
) => {
    try {
        const response = await UserService.editProfile({
            email, password, gender, lastname, firstname, phone, birthDay
        });

        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await AuthService.logout();
})

export const checkAuth = createAsyncThunk<LoginResponse>('auth/check', async (
    _, thunkAPI
) => {
    try {
        const response = await axiosClassic.get<LoginResponse>(`/user/refresh`);
        localStorage.setItem('token', response.data.accessToken);
        if (response.data.accessToken) {
            saveToStorage(response.data)
        }
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})