import {IProduct} from '@/models/IProduct';
import axios from "axios";
import {axiosClassic} from "@/api/interceptors";
import {IProductFields} from "@/components/forms/AdminProductForm/useAdminProductForm";
import {IParameter} from "@/models/IParameter";
import {IValue} from "@/models/IValue";


export const ProductService = {
    async getAll(params?: {
        term?: string,
        categoryId?: number,
        brandIds?: number[],
        typeIds?: number[],
        sort?: string,
        priceMin?: number
        priceMax?: number,
        parameters?: {
            parameterId: number,
            title: string,
            type: string,
            format: string,
            valueIds: number[],
            valueId: number
            value: IValue
        }[]
    }) {
        return await axios.get<IProduct[]>('http://localhost:5000/api/product', {
            params: {
                term: params?.term,
                categoryId: params?.categoryId,
                typeIds: JSON.stringify(params?.typeIds),
                brandIds: JSON.stringify(params?.brandIds),
                sort: params?.sort,
                priceMin: params?.priceMin,
                priceMax: params?.priceMax,
                parameters: params?.parameters
            }
        });
    },

    async getById(id: string) {
        return await axios.get<IProductFields>(`http://localhost:5000/api/product/${id}`);
    },

    async edit(id: string, data: IProductFields) {
        return await axiosClassic.put<IProductFields>(`http://localhost:5000/api/product/${id}`, {
            ...data
        });
    },

    async delete(id: number) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/product/${id}`);
    },

    async create(data: IProductFields) {
        return await axiosClassic.post<IProduct>(`http://localhost:5000/api/product`, data);
    },

    async getAllParametersByTypeId(id: string) {
        return await axiosClassic.get<IParameter[]>(`http://localhost:5000/api/parameter/type/${Number(id)}`);
    },
}