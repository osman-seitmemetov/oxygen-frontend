import {axiosClassic, instance} from "../api/interceptots";
import {IOrder} from "@/models/IOrder";
import {IOrderFields} from "@/types/types";

export const OrderService = {
    async getAll(term?: string) {
        return await axiosClassic.get<IOrder[]>('/order/all', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getById(id: string) {
        return await instance.get<IOrder>(`/order/${id}`);
    },

    async getByIdForAdmin(id: string) {
        return await axiosClassic.get<IOrderFields>(`/order/${id}`);
    }
}