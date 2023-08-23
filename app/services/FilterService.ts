import axios from "axios";
import {axiosClassic} from "@/api/interceptots";
import {IFilterGroup} from "@/models/IFilterGroup";
import {IFilterGroupFields} from "@/components/forms/AdminFilterGroupForm/useAdminFilterGroupForm";
import {IFilterOption} from "@/models/IFilterOption";
import {IFilterOptionFields} from "@/components/forms/AdminFilterOptionForm/useAdminFilterOptionForm";


export const FilterService = {
    async getAllFilterGroups(term?: string) {
        return await axios.get<IFilterGroup[]>('http://localhost:5000/api/filter_group', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getFilterGroupById(id: string) {
        return await axios.get<IFilterGroupFields>(`http://localhost:5000/api/filter_group/${id}`);
    },

    async createFilterGroup(data: IFilterGroupFields) {
        return await axios.post<IFilterGroup>(`http://localhost:5000/api/filter_group`, data);
    },

    async editFilterGroup(id: string, data: IFilterGroupFields) {
        return await axiosClassic.put<IFilterGroup>(`http://localhost:5000/api/filter_group/${id}`, data);
    },

    async deleteFilterGroup(id: string) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/filter_group/${id}`);
    },

    async getAllFilterOptions(term?: string) {
        return await axios.get<IFilterOption[]>('http://localhost:5000/api/filter_option', {
            params: term
                ? {
                    term
                }
                : {},
        });
    },

    async getFilterOptionById(id: string) {
        return await axios.get<IFilterOptionFields>(`http://localhost:5000/api/filter_option/${id}`);
    },

    async createFilterOption(data: IFilterGroupFields) {
        return await axios.post<IFilterOption>(`http://localhost:5000/api/filter_option`, data);
    },

    async editFilterOption(id: string, data: IFilterGroupFields) {
        return await axiosClassic.put<IFilterOption>(`http://localhost:5000/api/filter_option/${id}`, data);
    },

    async deleteFilterOption(id: string) {
        return await axiosClassic.delete<string>(`http://localhost:5000/api/filter_option/${id}`);
    }
}