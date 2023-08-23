import {instance} from "@/api/interceptots";
import {ICart, ICartProduct} from "@/models/ICart";

export const CartService = {
    async create(data: {productId: number, basketId: number | undefined}) {
        return await instance.post('/basket', data, {withCredentials: true})
    },

    async get() {
        return await instance.get<ICart>('/basket', {withCredentials: true});
    },

    async deleteAll() {
        return await instance.delete<string>('/basket', {withCredentials: true});
    },

    async deleteById(id: string) {
        return await instance.delete<string>(`/basket/${id}`, {withCredentials: true});
    },

    async changeCount(id: number, count: number) {
        console.log("___", id)
        return await instance.put<ICartProduct>(`/basket/${id}`, {id, count} ,{withCredentials: true});
    }
}