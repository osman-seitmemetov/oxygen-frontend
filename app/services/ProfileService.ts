import {instance} from "@/api/interceptors";
import {IUserPromocode} from "@/models/IPromocode";

export const ProfileService = {
    async getAllPromocodes() {
        return await instance.get<IUserPromocode[]>('/user/promocode');
    },
}