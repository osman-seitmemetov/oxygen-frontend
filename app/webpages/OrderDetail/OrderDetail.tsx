import {FC} from "react";
import style from './OrderDetail.module.scss';
import Account from "../../components/Account/Account";
import OrderDetailInfo from "./OrderDetailInfo/OrderDetailInfo";
import HistoryDetailProducts from "./OrderDetailProducts/OrderDetailProducts";
import {useOrder} from "@/webpages/OrderDetail/useOrder";
import {useRouter} from "next/router";
import {useAuth} from "@/hooks/useAuth";

const OrderDetail: FC = () => {
    const {query} = useRouter();
    const {order, isLoading} = useOrder(String(query?.id));

    return (
        <Account title="История заказов">
            {
                isLoading
                    ? <div>loading...</div>
                    : <div className={style.ordering}>
                        <OrderDetailInfo order={order?.data}/>
                        <HistoryDetailProducts products={order?.data.order_products}/>
                    </div>
            }
        </Account>
    );
}

export default OrderDetail;