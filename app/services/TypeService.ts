import axios from "axios";
import {axiosClassic} from "@/api/interceptors";
import {IType} from "@/models/IType";
import {ITypeFields} from "@/components/forms/AdminTypeForm/useAdminTypeForm";


export const TypeService = {
    async getAll(term?: string) {
        return await axios.get<IType[]>('http://localhost:5000/api/type', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getById(id: string) {
        return await axios.get<ITypeFields>(`http://localhost:5000/api/type/${id}`);
    },

    async create(data: ITypeFields) {
        return await axios.post<IType>(`http://localhost:5000/api/type`, data);
    },

    async edit(id: string, data: ITypeFields) {
        return await axiosClassic.put<IType>(`http://localhost:5000/api/type/${id}`, data);
    },

    async delete(id: number) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/type/${id}`);
    }
}