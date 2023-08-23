import React, {FC, useState} from "react";
import styles from './AdminBanners.module.scss';
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

interface IBannerFields {
    img: File
}

const AdminBanners: FC = () => {
    const {data, isLoading, deleteAsync, handleSearch} = useAdminBanners();
    const banners = data?.data;
    const [activeModal, setActiveModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        resetField,
        control,
    } = useForm<IBannerFields>({
        mode: "onChange"
    });

    return (
        <>
            <Head>
                <title>Панель администратора {'>'} Баннеры</title>
            </Head>
            <Admin title=" > Баннеры">
                {
                    isLoading
                        ? <div>loading...</div>
                        : <div>
                            <ButtonTransparent
                                link="/admin/banner/create"
                                style={{maxWidth: '300px', marginBottom: 20}}
                            >
                                Добавить новый баннер
                            </ButtonTransparent>

                            <div className={styles.banners}>
                                добавить drag&apos;n&apos;drop для задания порядка
                                {
                                    Array.isArray(banners) && banners?.map(banner => (
                                        <AdminBannersItem
                                            banner={banner}
                                            key={banner.id}
                                            removeHandler={deleteAsync}
                                            setActiveModal={setActiveModal}
                                            activeModal={activeModal}
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

export default AdminBanners;