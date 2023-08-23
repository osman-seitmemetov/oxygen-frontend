import axios from "axios";
import {axiosClassic} from "../api/interceptots";
import {IAbout} from "@/models/IAbout";


export const AboutService = {
    async get() {
        return await axios.get<IAbout>('http://localhost:5000/api/about');
    },

    async edit(data: IAbout) {
        return await axiosClassic.put<IAbout>(`http://localhost:5000/api/about`, data);
    }
}