import * as userActions from "@/store/auth/AuthActionCreators";
import * as cartA from "@/store/cart/cartAC";
import {cartActions} from "@/store/cart/cartSlice";


export const allActions = {
    ...userActions,
    ...cartA,
    ...cartActions
}