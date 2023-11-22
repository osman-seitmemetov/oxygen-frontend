import axios from "axios";
import {axiosClassic} from "@/api/interceptors";
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
        const {savedValues, ...rest} = data;
        return await axiosClassic.put<IParameter>(`http://localhost:5000/api/parameter/${id}`, {
            ...rest,
            values: [...data.savedValues, ...data.values]
        });
    },

    async delete(id: number) {
        console.log("__PARID__", id);
        // return await axiosClassic.delete<string>(`http://localhost:5000/api/parameter/${id}`);
    }
}