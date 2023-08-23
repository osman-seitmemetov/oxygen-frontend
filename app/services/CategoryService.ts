import axios from "axios";
import {axiosClassic} from "@/api/interceptots";
import {ICategory} from "@/models/ICategory";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import {ICategoryChildren} from "@/webpages/Category/Category";


export const CategoryService = {
    async getAll(term?: string) {
        return await axios.get<ICategory[]>('http://localhost:5000/api/category', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getChildrenById(id: string) {
        return await axios.get<ICategoryChildren>(`http://localhost:5000/api/category/children/${id}`);
    },

    async getById(id: string) {
        return await axios.get<ICategoryFields>(`http://localhost:5000/api/category/${id}`);
    },

    async create(data: ICategoryFields) {
        return await axios.post<ICategory>(`http://localhost:5000/api/category`, data);
    },

    async edit(id: string, data: ICategoryFields) {
        return await axiosClassic.put<ICategory>(`http://localhost:5000/api/category/${id}`, data);
    },

    async delete(id: string) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/category/${id}`);
    }
}