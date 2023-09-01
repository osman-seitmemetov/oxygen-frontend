import React, {FC} from "react";
import styles from "./AdminOrdersItem.module.scss";
import Link from "next/link";
import Modal from "@/UI/modals/Modal/Modal";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import {IBanner} from "@/models/IBanner";
import {IOrder, orderStatuses, orderTypes} from "@/models/IOrder";
import style from "@/webpages/Orders/OrdersItem/OrdersItem.module.scss";
import {convertPostgresDateToNormalDate} from "@/lib/date/convertPostgresDateToNormalDate";
import {ORDERS_ROUTE} from "@/lib/consts";


interface AdminBannersItemProps {
    order: IOrder,
    // removeHandler: (bannerId: string) => void,
    // setActiveModal: (activeModal: boolean) => void,
    // activeModal: boolean
}


const AdminOrdersItem: FC<AdminBannersItemProps> = ({order}) => {
    return (
        <>
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
                    <Link href={`/admin/orders/${order.id}`}>
                        <a className={style.link}>Посмотреть детализацию доставки</a>
                    </Link>

                    {/*<Link*/}
                    {/*    href={`/admin/banner/${banner.id}`}*/}
                    {/*>*/}
                    {/*    <div className={styles.link}>*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">*/}
                    {/*            <path*/}
                    {/*                d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"/>*/}
                    {/*        </svg>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}

                    {/*<button*/}
                    {/*    className={styles.btn}*/}
                    {/*    // onClick={() => setActiveModal(true)}*/}
                    {/*>*/}
                    {/*    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*        <path*/}
                    {/*            d="M4.2097 4.3871L4.29289 4.29289C4.65338 3.93241 5.22061 3.90468 5.6129 4.2097L5.70711 4.29289L12 10.585L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.415 12L19.7071 18.2929C20.0676 18.6534 20.0953 19.2206 19.7903 19.6129L19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L12 13.415L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.585 12L4.29289 5.70711C3.93241 5.34662 3.90468 4.77939 4.2097 4.3871L4.29289 4.29289L4.2097 4.3871Z"/>*/}
                    {/*    </svg>*/}
                    {/*</button>*/}
                </div>
            </div>

            {/*<Modal*/}
            {/*    title="Вы точно хотите удалить этот баннер?"*/}
            {/*    active={activeModal}*/}
            {/*    setActive={setActiveModal}*/}
            {/*>*/}
            {/*    <div*/}
            {/*        style={{*/}
            {/*            display: "flex",*/}
            {/*            justifyContent: "space-between",*/}
            {/*            width: '100%'*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <PrimaryButton*/}
            {/*            onClick={() => {*/}
            {/*                removeHandler(String(banner.id));*/}
            {/*                setActiveModal(false);*/}
            {/*            }}*/}
            {/*            style={{width: '48%'}}*/}
            {/*        >*/}
            {/*            Да*/}
            {/*        </PrimaryButton>*/}

            {/*        <SecondaryButton*/}
            {/*            onClick={() => setActiveModal(false)}*/}
            {/*            style={{width: '48%'}}*/}
            {/*        >*/}
            {/*            Нет*/}
            {/*        </SecondaryButton>*/}
            {/*    </div>*/}
            {/*</Modal>*/}
        </>
    );
}

export default AdminOrdersItem;

