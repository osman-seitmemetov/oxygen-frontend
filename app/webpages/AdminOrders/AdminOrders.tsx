import React, {FC, useState} from "react";
import styles from './AdminOrders.module.scss';
import Admin from "@/components/Admin/Admin";
import {useAdminBanners} from "@/webpages/AdminBanners/useAdminBanners";
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import Head from "next/head";
import Modal from '@/components/UI/modals/Modal/Modal';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import Form from "@/components/Form/Form";
import InputTel from "@/components/UI/InputGroup/InputTel/InputTel";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import AdminBannersItem from "@/webpages/AdminBanners/AdminBannersItem/AdminBannersItem";
import {useAdminOrders} from "@/webpages/AdminOrders/useAdminOrders";
import {IOrderFields} from "@/types/types";
import AdminOrdersItem from "@/webpages/AdminOrders/AdminOrdersItem/AdminOrdersItem";

interface IBannerFields {
    img: File
}

const AdminOrders: FC = () => {
    const {data, isLoading, handleSearch} = useAdminOrders();
    const orders = data?.data;
    const [activeModal, setActiveModal] = useState(false);

    return (
        <>
            <Head>
                <title>Панель администратора {'>'} Баннеры</title>
            </Head>
            <Admin title=" > Заказы">
                {
                    isLoading
                        ? <div>loading...</div>
                        : <div>
                            <div className={styles.banners}>
                                {
                                    Array.isArray(orders) && orders?.map(order => (
                                        <AdminOrdersItem
                                            order={order}
                                            key={order.id}
                                            // removeHandler={deleteAsync}
                                            // setActiveModal={setActiveModal}
                                            // activeModal={activeModal}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                }
            </Admin>
        </>
    );
}

export default AdminOrders;