import axios from "axios";
import {axiosClassic} from "@/api/interceptors";
import {IBrand} from "@/models/IBrand";
import {IBrandFields} from "@/components/forms/AdminBrandForm/useAdminBrandForm";


export const BrandService = {
    async getAll(term?: string) {
        return await axios.get<IBrand[]>('http://localhost:5000/api/brand', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getById(id: string) {
        return await axios.get<IBrandFields>(`http://localhost:5000/api/brand/${id}`);
    },

    async create(data: IBrandFields) {
        return await axios.post<IBrand>(`http://localhost:5000/api/brand`, data);
    },

    async edit(id: string, data: IBrandFields) {
        return await axiosClassic.put<IBrand>(`http://localhost:5000/api/brand/${id}`, data);
    },

    async delete(id: number) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/brand/${id}`);
    }
}