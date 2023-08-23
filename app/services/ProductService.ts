import {IProduct} from '@/models/IProduct';
import axios from "axios";
import {axiosClassic} from "@/api/interceptots";
import {IProductFields} from "@/components/forms/AdminProductForm/useAdminProductForm";
import {IProductInfoValue} from "@/models/IProductInfoValue";
import {IParameter} from "@/models/IParameter";


export const ProductService = {
    async getAll(params?: { term?: string, categoryId?: number }) {
        return await axios.get<IProduct[]>('http://localhost:5000/api/product', {params});
    },

    async getById(id: string) {
        return await axios.get<IProductFields>(`http://localhost:5000/api/product/${id}`);
    },

    async edit(id: string, data: IProductFields) {
        return await axiosClassic.put<IProductFields>(`http://localhost:5000/api/product/${id}`, data);
    },

    async delete(id: string) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/product/${id}`);
    },

    async create(data: IProductFields) {
        return await axiosClassic.post<IProduct>(`http://localhost:5000/api/product`, data);
    },

    async getAllParametersByTypeId(id: string) {
        return await axiosClassic.get<IParameter[]>(`http://localhost:5000/api/parameter/type/${Number(id)}`);
    },
}