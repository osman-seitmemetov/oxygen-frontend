import {instance} from "@/api/interceptors";
import {ICart, ICartProduct} from "@/models/ICart";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const CartService = {
    async get() {
        return await instance.get<ICart>('/basket', {withCredentials: true});
    },

    async addToCart(data: { productId: number }) {
        return await instance.post<ICartProduct>(`/basket/add`, data, {withCredentials: true})
    },

    async deleteFromCart(data: {
        productId: number
    }) {
        return await instance.post<string>(`/basket/delete`, data, {withCredentials: true})
    },


    async create(data: {
        productId: number,
        basketId: number | undefined
    }) {
        return await instance.post('/basket', data, {withCredentials: true})
    },

    async deleteAll() {
        return await instance.delete<string>('/basket', {withCredentials: true});
    },

    async deleteById(id: string) {
        return await instance.delete<string>(`/basket/${id}`, {withCredentials: true});
    },

    async changeCount(id: number, count: number) {
        console.log("___", id)
        return await instance.put<ICartProduct>(`/basket/${id}`, {id, count}, {withCredentials: true});
    }
}

// const accessToken = localStorage.getItem('token');

export const cartAPI = createApi({
    reducerPath: 'cartAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        credentials: "include",
        headers: {
            'Authorization': `Bearer ${typeof window !== 'undefined' && localStorage.getItem('token')}`
        }
    }),
    tagTypes: ['Cart'],
    endpoints: (build) => ({
        fetchCart: build.query<ICart, void>({
            query: () => ({
                url: '/basket'
            }),
            providesTags: result => ['Cart']
        }),
        addToCart: build.mutation<ICartProduct, number>({
            query: (productId: number) => ({
                url: '/basket/add',
                method: 'POST',
                body: {productId}
            }),
            invalidatesTags: ['Cart']
        }),
        deleteFromCart: build.mutation<string, number>({
            query: (productId: number) => ({
                url: '/basket/delete',
                method: 'POST',
                body: {productId}
            }),
            invalidatesTags: ['Cart']
        }),
        deleteAllFromCart: build.mutation<string, void>({
            query: () => ({
                url: '/basket',
                method: 'DELETE',
            }),
            invalidatesTags: ['Cart']
        })
    })
})