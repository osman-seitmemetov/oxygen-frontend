import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminCategories.module.scss";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import InputSearch from "@/UI/InputSearch/InputSearch";
import {useAdminCategories} from "@/webpages/AdminCategories/useAdminCategories";
import AdminCategoriesItem from "@/webpages/AdminCategories/AdminCategoriesItem/AdminCategoriesItem";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import {useAdminBrands} from "@/webpages/AdminBrands/useAdminBrands";
import AdminBrandsItem from "@/webpages/AdminBrands/AdminBrandsItem/AdminBrandsItem";


const AdminBrands: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch
    } = useAdminBrands();

    const brands = data?.data;

    return (
        <Admin title={` > Бренды`}>
            <ButtonTransparent
                link="/admin/brands/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить категорию
            </ButtonTransparent>

            <InputSearch
                isPlaceholderLeft
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск категорий"
            />

            {
                isLoading
                    ? <div className={styles.products}>
                        <SkeletonLoader
                            count={5}
                            style={{
                                height: 52,
                                width: '100%',
                                marginBottom: 20,
                                borderRadius: 10
                            }}
                        />
                    </div>
                    : brands && brands.length ? <div>
                            <div className={styles.products}>
                                {
                                    Array.isArray(brands) && brands.map(brand => (
                                        <AdminBrandsItem
                                            key={brand.id}
                                            brand={brand}
                                            setActiveModal={setActiveModal}
                                            removeHandler={deleteAsync}
                                            activeModal={activeModal}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        : <div className={styles.products}>Категории не найдены (</div>
            }
        </Admin>
    );
}

export default AdminBrands;

