import {IUser} from "@/models/IUser";

export interface RegistrationResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}