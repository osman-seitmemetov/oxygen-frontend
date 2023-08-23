import {FC} from "react";
import style from './Orders.module.scss';
import AccountEmpty from "@/components/Account/AccountEmpty/AccountEmpty";
import OrdersItem from './OrdersItem/OrdersItem';
import Account from "@/components/Account/Account";
import PictureOrdersEmpty from "@/components/pictures/PictureOrdersEmpty";
import {useOrders} from "@/webpages/Orders/useOrders";

const Orders: FC = () => {
    const {orders, isLoading} = useOrders();

    return (
        <Account title="История заказов">
            {
                orders?.data && orders.data.length > 0
                    ? <div className={style.history}>{orders?.data.map(order =>
                        <OrdersItem key={order.id} order={order}/>)}</div>
                    : <AccountEmpty title="У вас нет созданных заказов">
                        <PictureOrdersEmpty/>
                    </AccountEmpty>
            }
        </Account>
    );
}

export default Orders;