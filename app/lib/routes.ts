import {
    ABOUT_ROUTE, ARTICLE_ROUTE, CART_ORDER_PAY_ROUTE, CART_ORDER_ROUTE,
    CART_ROUTE, CONTACTS_ROUTE, COUPONS_ROUTE, FAQ_ROUTE, HISTORY_DETAIL_ROUTE,
    HISTORY_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NEWS_ROUTE, NOTIFICATION_ROUTE,
    PASSWORD_RECOVERY2_ROUTE, PASSWORD_RECOVERY_ROUTE, PRODUCT_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE
} from "./utils/consts";
import React, {FC} from "react";
const Login =  React.lazy(() => import( "./pages/Login/Login"));
const Registration =  React.lazy(() => import( "./pages/Registration/Registration"));
const Home =  React.lazy(() => import( "./pages/Home/Home"));
const About =  React.lazy(() => import( "./pages/about/about"));
const FAQ =  React.lazy(() => import( "./pages/FAQ/FAQ"));
const News =  React.lazy(() => import( "./pages/News/News"));
const Article =  React.lazy(() => import( "./pages/Article/Article"));
const PasswordRecovery =  React.lazy(() => import( "./pages/PasswordRecovery/PasswordRecovery"));
const PasswordRecovery2 =  React.lazy(() => import( "./pages/PasswordRecovery2/PasswordRecovery2"));
const Product =  React.lazy(() => import( "./pages/Product/Product"));
const Search =  React.lazy(() => import( "./pages/Category/Category"));
const Profile =  React.lazy(() => import( "./pages/Settings/Settings"));
const History =  React.lazy(() => import( "./pages/Orders/Orders"));
const HistoryDetail =  React.lazy(() => import( "./pages/OrderDetail/OrderDetail"));
const Coupons =  React.lazy(() => import( "./pages/Promocodes/Promocodes"));
const Notifications =  React.lazy(() => import( "./pages/Notifications/Notifications"));
const Cart =  React.lazy(() => import( "./pages/Cart/Cart"));
const CartOrder =  React.lazy(() => import( "./pages/CartOrder/CartOrder"));
const CartPay =  React.lazy(() => import( "./pages/CartPay/CartPay"));
const Contacts =  React.lazy(() => import( "./pages/Contacts/Contacts"));


interface IRoute {
    path: string
    Component: FC
}

export const publicRoutes: IRoute[] = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: FAQ_ROUTE,
        Component: FAQ
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: ARTICLE_ROUTE,
        Component: Article
    },
    {
        path: PASSWORD_RECOVERY_ROUTE,
        Component: PasswordRecovery
    },
    {
        path: PASSWORD_RECOVERY2_ROUTE,
        Component: PasswordRecovery2
    },
    {
        path: PRODUCT_ROUTE,
        Component: Product
    },
    {
        path: SEARCH_ROUTE,
        Component: Search
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    }
]

export const authRoutes: IRoute[] = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: HISTORY_ROUTE,
        Component: History
    },
    {
        path: HISTORY_DETAIL_ROUTE,
        Component: HistoryDetail
    },
    {
        path: COUPONS_ROUTE,
        Component: Coupons
    },
    {
        path: NOTIFICATION_ROUTE,
        Component: Notifications
    },
    // {
    //     path: BALANCE_ROUTE,
    //     Component: Balance
    // },
    {
        path: CART_ROUTE,
        Component: Cart
    },
    {
        path: CART_ORDER_ROUTE,
        Component: CartOrder
    },
    {
        path: CART_ORDER_PAY_ROUTE,
        Component: CartPay
    }
]