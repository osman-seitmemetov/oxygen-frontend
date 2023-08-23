import axios from "axios";
import {IBanner} from "@/models/IBanner";
import {axiosClassic} from "@/api/interceptots";
import {IBannerFields} from "@/components/forms/AdminBannerForm/useAdminBannerForm";

export const BannerService = {
    async getAll(term?: string) {
        return await axios.get<IBanner[]>('http://localhost:5000/api/banner', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getById(id: string) {
        console.log(id)
        return await axios.get<IBannerFields>(`http://localhost:5000/api/banner/${id}`);
    },

    async create(data: IBannerFields) {
        return await axios.post<IBanner>(`http://localhost:5000/api/banner`, data);
    },

    async edit(id: string, data: IBannerFields) {
        return await axiosClassic.put<IBanner>(`http://localhost:5000/api/banner/${id}`, data);
    },

    async delete(id: string) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/banner/${id}`);
    }
}