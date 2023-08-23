import {instance} from "../api/interceptots";
import {INotification} from "@/models/INotification";

export const NotificationsService = {
    async getAll() {
        return await instance.get<INotification[]>('/notification');
    },

    async editIsRead(read: boolean, id: number) {
        return await instance.put<INotification>(`/notification/${id}`, {read});
    },
}