import {FC} from "react";
import style from './OrderDetailInfo.module.scss';
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import {ORDERS_ROUTE} from "@/lib/consts";
import Link from "next/link";
import {IOrder, orderStatuses, orderTypes} from "@/models/IOrder";
import {convertPostgresDateToNormalDate} from "@/lib/date/convertPostgresDateToNormalDate";
import {IUser} from "@/models/IUser";


interface OrderDetailInfoProps {
    order: IOrder | undefined
}

const OrderDetailInfo: FC<OrderDetailInfoProps> = ({order}) => {
    return (
        <div className={style.historyDetailInfo}>
            <Link href={ORDERS_ROUTE}>
                <div className={style.link}>
                    Вернуться ко всем заказам

                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.16252 2.50386C9.39033 2.73167 9.39033 3.10101 9.16252 3.32882L5.49166 6.99967L9.16252 10.6705C9.39033 10.8983 9.39033 11.2677 9.16252 11.4955C8.93471 11.7233 8.56537 11.7233 8.33756 11.4955L4.25423 7.41215C4.02642 7.18435 4.02642 6.815 4.25423 6.58719L8.33756 2.50386C8.56537 2.27606 8.93471 2.27606 9.16252 2.50386Z" />
                    </svg>
                </div>
            </Link>

            <div className={style.head}>
                <div className={style.info}>
                    <span>Дата заявки:</span>
                    {convertPostgresDateToNormalDate(String(order?.requestDate))}
                </div>

                {order?.status === orderStatuses.PAID && <div className={`${style.status} ${style.status_active}`}>Оплачено</div>}
                {order?.status === orderStatuses.NOT_PAID && <div className={`${style.status} ${style.status_inactive}`}>Не оплачен</div>}
            </div>

            <div className={style.title}>Заказ №{order?.id}</div>

            <div className={style.list}>
                <div className={style.info}>
                    <span>Тип заказа:</span>
                    {order?.type === orderTypes.PARCEL && "Бандероль"}
                </div>

                <div className={style.info}>
                    <span>Дата планируемой доставки:</span>
                    {convertPostgresDateToNormalDate(String(order?.deliveryDate))}
                </div>
            </div>

            <div className={`${style.list} ${style.list_justify}`}>
                <div className={style.info}>
                    <span>Сумма заказа</span>
                    {order?.orderSum} руб.
                </div>

                <div className={style.info}>
                    <span>Доставка</span>
                    {order?.deliverySum} руб.
                </div>

                <hr />

                <div className={style.info}>
                    <span>Итого</span>
                    {order?.globalSum} руб.
                </div>
            </div>

            <ButtonGreen type="button" className={style.btn}>Повторить заказ</ButtonGreen>
        </div>
    );
}

export default OrderDetailInfo;