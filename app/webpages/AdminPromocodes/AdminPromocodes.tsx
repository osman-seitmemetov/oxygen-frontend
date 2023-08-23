import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminPromocodes.module.scss";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import InputSearch from "@/UI/InputSearch/InputSearch";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import AdminProductItem from "@/webpages/AdminProducts/AdminProductItem/AdminProductItem";
import {useAdminProducts} from "@/webpages/AdminProducts/useAdminProducts";
import AdminPromocodesItem from "@/webpages/AdminPromocodes/AdminPromocodesItem/AdminPromocodesItem";
import {useAdminPromocodes} from "@/webpages/AdminPromocodes/useAdminPromocodes";


const AdminPromocodes: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch
    } = useAdminPromocodes();
    const promocodes = data?.data;

    return (
        <Admin title={` > Промокоды`}>
            <ButtonTransparent
                link="/admin/promocodes/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить промокод
            </ButtonTransparent>

            <InputSearch
                isPlaceholderLeft
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск промокодов"
            />

            {
                isLoading
                    ? <div className={styles.products}>
                        <SkeletonLoader
                            count={5}
                            style={{
                                height: 70,
                                width: '100%',
                                marginBottom: 20,
                                borderRadius: 10
                            }}
                        />
                    </div>
                    : promocodes && <div>
                    <div className={styles.products}>
                        {
                            Array.isArray(promocodes) && promocodes.map(promocode => (
                                <AdminPromocodesItem
                                    key={promocode.id}
                                    promocode={promocode}
                                    setActiveModal={setActiveModal}
                                    removeHandler={deleteAsync}
                                    activeModal={activeModal}
                                />
                            ))
                        }
                    </div>
                </div>
            }
        </Admin>
    );
}

export default AdminPromocodes;

