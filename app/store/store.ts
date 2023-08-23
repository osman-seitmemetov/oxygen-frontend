import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as toastrReducer} from 'react-redux-toastr'
import {reducer as UserReducer} from "./auth/AuthSlice";
import notificationsReducer from "./notifications/NotificationsSlice";
import bannersReducer from "./banners/BannersSlice";
import FAQReducer from "./FAQ/FAQSlice";


const rootReducer = combineReducers({
    user: UserReducer,
    notificationsReducer,
    bannersReducer,
    FAQReducer,
    toastr: toastrReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootState = ReturnType<typeof rootReducer>;
export type TypeRootState = ReturnType<typeof store.getState>;