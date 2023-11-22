import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as toastrReducer} from 'react-redux-toastr'
import {reducer as userReducer} from "./auth/AuthSlice";
import cartReducer from "./cart/cartSlice";
import notificationsReducer from "./notifications/NotificationsSlice";
import bannersReducer from "./banners/BannersSlice";
import FAQReducer from "./FAQ/FAQSlice";
import {cartAPI} from "@/services/CartService";


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    [cartAPI.reducerPath]: cartAPI.reducer,
    notificationsReducer,
    bannersReducer,
    FAQReducer,
    toastr: toastrReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartAPI.middleware),
    devTools: true
})

// export type RootState = ReturnType<typeof rootReducer>;
export type TypeRootState = ReturnType<typeof store.getState>;