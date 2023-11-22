import axios from "axios";
import {API_URL} from "@/config/API";

export const axiosClassic = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});


export const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('token');

    if (config.headers && localStorage.getItem('token')) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});


// Если понадобиться
// instance.interceptors.response.use(config => config, async error => {
//     const originalRequest = error.config;
//
//
// });