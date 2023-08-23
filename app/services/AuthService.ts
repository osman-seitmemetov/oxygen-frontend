import {AxiosResponse} from "axios";
import {LoginResponse} from "@/models/response/LoginResponse";
import {RegistrationResponse} from "@/models/response/RegistrationResponse";
import {genderTypes} from "@/models/IUser";
import {axiosClassic} from "@/api/interceptots";
import {saveTokenToLocalStorage} from "@/lib/saveTokenToLocalStorage";


export const AuthService = {
    async login(email: string, password: string): Promise<AxiosResponse<LoginResponse>> {
        const response = await axiosClassic.post<LoginResponse>('/user/login', {email, password});
        if (response.data.accessToken) saveTokenToLocalStorage(response.data.accessToken);
        return response;
    },

    async registration(
        email: string, password: string,
        gender: genderTypes, lastName: string,
        name: string, phone: string,
        bornDate: Date
    ): Promise<AxiosResponse<RegistrationResponse>> {
        const response = await axiosClassic.post<RegistrationResponse>('/user/registration', {
            email, password, gender, lastName, name, phone, bornDate
        });
        if (response.data.accessToken) saveTokenToLocalStorage(response.data.accessToken);

        return response;
    },

    async logout(): Promise<void> {
        localStorage.removeItem('token');
        return axiosClassic.post('/user/logout');
    }
}