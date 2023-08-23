import {LoginResponse} from "@/models/response/LoginResponse";

export const saveToStorage = (data: LoginResponse) => {
    // saveTokensStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}