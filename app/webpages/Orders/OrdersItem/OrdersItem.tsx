import {FC} from "react";
import style from './OrdersItem.module.scss';
import {ORDERS_ROUTE} from "@/lib/consts";
import {IOrder, orderStatuses, orderTypes} from "@/models/IOrder";
import Link from "next/link";
import {convertPostgresDateToNormalDate} from "@/lib/date/convertPostgresDateToNormalDate";

interface HistoryItemProps {
    order: IOrder
}

const OrdersItem: FC<HistoryItemProps> = ({ order }) => {
    return (
        <div className={style.item}>
            <div className={style.head}>
                <div className={style.num}>№{order.id}</div>
                {order.status === orderStatuses.PAID && <div className={`${style.status} ${style.status_active}`}>Оплачено</div>}
                {order.status === orderStatuses.NOT_PAID && <div className={`${style.status} ${style.status_inactive}`}>Не оплачен</div>}
            </div>

            <div className={style.list}>
                <div className={style.info}>
                    <span>Дата заявки:</span>
                    {convertPostgresDateToNormalDate(String(order?.requestDate))}
                </div>

                <div className={style.info}>
                    <span>Сумма заказа:</span>
                    {order.orderSum} руб.
                </div>

                <div className={style.info}>
                    <span>Тип заказа:</span>
                    {order?.type === orderTypes.PARCEL && "Бандероль"}
                </div>

                <div className={style.info}>
                    <span>Дата планируемой доставки:</span>
                    {convertPostgresDateToNormalDate(String(order?.requestDate))}
                </div>
            </div>

            <div className={style.bottom}>
                <Link href={`${ORDERS_ROUTE}/${order.id}`}>
                    <a className={style.link}>Посмотреть детализацию доставки</a>
                </Link>
            </div>
        </div>
    );
}

export default OrdersItem;