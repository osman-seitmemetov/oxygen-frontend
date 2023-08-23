import axios from "axios";
import {axiosClassic} from "@/api/interceptots";
import {ICategory} from "@/models/ICategory";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import {IParameter} from "@/models/IParameter";
import {IParameterFields} from "@/components/forms/AdminParameterForm/useAdminParameterForm";


export const ParameterService = {
    async getAll(term?: string) {
        return await axios.get<IParameter[]>('http://localhost:5000/api/parameter', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getById(id: string) {
        return await axios.get<IParameterFields>(`http://localhost:5000/api/parameter/${id}`);
    },

    async create(data: IParameterFields) {
        return await axios.post<IParameter>(`http://localhost:5000/api/parameter`, data);
    },

    async edit(id: string, data: IParameterFields) {
        return await axiosClassic.put<IParameter>(`http://localhost:5000/api/parameter/${id}`, data);
    },

    async delete(id: string) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/parameter/${id}`);
    }
}