import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminProducts.module.scss";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import AdminProductItem from "@/webpages/AdminProducts/AdminProductItem/AdminProductItem";
import {useAdminProducts} from "@/webpages/AdminProducts/useAdminProducts";


const AdminArticles: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch
    } = useAdminProducts();
    const products = data?.data;

    return (
        <Admin title={` > Товары`}>
            <SecondaryButton
                link="/admin/products/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить товар
            </SecondaryButton>

            <HeaderSearch
                isPlaceholderLeft
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск товаров"
            />

            {
                isLoading
                    ? <div className={styles.products}>
                        <SkeletonLoader
                            count={5}
                            style={{
                                height: 90,
                                width: '100%',
                                marginBottom: 20,
                                borderRadius: 10
                            }}
                        />
                    </div>
                    : products?.length
                        ? <div>
                            <div className={styles.products}>
                                {
                                    Array.isArray(products) && products.map(product => (
                                        <AdminProductItem
                                            key={product.id}
                                            product={product}
                                            setActiveModal={setActiveModal}
                                            removeHandler={deleteAsync}
                                            activeModal={activeModal}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        : <div className={styles.products}>Товары не найдены</div>
            }
        </Admin>
    );
}

export default AdminArticles;

