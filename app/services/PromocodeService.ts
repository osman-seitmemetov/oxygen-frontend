import {axiosClassic, instance} from "@/api/interceptors";
import {IPromocode} from "@/models/IPromocode";
import axios from "axios";
import {IPromocodeFields} from "@/components/forms/AdminPromocodeForm/useAdminPromocodeForm";

export const PromocodeService = {
    async getAll(term?: string) {
        return await instance.get<IPromocode[]>('/promocode', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getById(id: string) {
        return await axios.get<IPromocodeFields>(`http://localhost:5000/api/promocode/${id}`);
    },

    async edit(id: string, data: IPromocodeFields) {
        return await axiosClassic.put<IPromocode>(`http://localhost:5000/api/promocode/${id}`, data);
    },

    async delete(id: number) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/promocode/${id}`);
    },

    async create(data: IPromocodeFields) {
        return await axiosClassic.post<IPromocode>(`http://localhost:5000/api/promocode`, data);
    },
}