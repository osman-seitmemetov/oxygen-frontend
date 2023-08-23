import {IUser} from "@/models/IUser";

export interface LoginResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}