import {createSlice} from "@reduxjs/toolkit";
import {INotification} from "../../models/INotification";

interface notificationsState {
    notifications: INotification[]
}

const initialState: notificationsState = {
    notifications: [
        {
            id: 1,
            title: 'Пополнение баланса на 20 000 тг.',
            text: 'Пополнение баланса на 20 000 тг.',
            read: false,
            date: '04.12.20 04:20',
        },
        {
            id: 2,
            title: 'Пополнение баланса 31 000 тг.',
            text: 'Пополнение баланса 31 000 тг.',
            read: false,
            date: '04.12.20 04:20',
        },
        {
            id: 3,
            title: 'Пополнение баланса на 20 000 тг.',
            text: 'Пополнение баланса на 20 000 тг.',
            read: false,
            date: '04.12.20 04:20',
        },
        {
            id: 4,
            title: 'Пополнение баланса на 20 000 тг.',
            text: 'Пополнение баланса на 20 000 тг.',
            read: true,
            date: '04.12.20 04:20',
        },
        {
            id: 5,
            title: 'Пополнение баланса 31 000 тг.',
            text: 'Пополнение баланса 31 000 тг.',
            read: true,
            date: '04.12.20 04:20',
        },
        {
            id: 6,
            title: 'Пополнение баланса на 20 000 тг.',
            text: 'Пополнение баланса на 20 000 тг.',
            read: true,
            date: '04.12.20 04:20',
        }
    ]
}

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        notificationsFetching() {

        }
    }
})

export default notificationsSlice.reducer;