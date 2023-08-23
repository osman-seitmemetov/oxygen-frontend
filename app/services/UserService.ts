import {genderTypes, IUser} from "@/models/IUser";
import {instance} from "../api/interceptots";
import {IProfileFields} from "@/types/types";

export interface IEditData {
    firstname?: string,
    lastname?: string,
    email?: string,
    isActivated?: boolean,
    birthDay?: string,
    gender?: genderTypes,
    phone?: string,
    password?: string
}

export const UserService = {
    async getAll(term?: string) {
        return await instance.get<IUser[]>('http://localhost:5000/api/user/users', {
            withCredentials: true,
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getById(id: string) {
        return await instance.get<IUser>(`http://localhost:5000/api/user/${id}`, {withCredentials: true});
    },

    async editProfile(editData: IEditData | IProfileFields) {
        return await instance.put<IUser>(`/user/edit`, editData);
    },

    async editUser(editData: IEditData | IProfileFields, id: string) {
        return await instance.put<IUser>(`/user/edit/${id}`, editData);
    },

    async delete(id: string) {
        return await instance.delete<string>(`http://localhost:5000/api/user/${id}`, {withCredentials: true});
    }
}