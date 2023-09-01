import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminTypes.module.scss";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import {useAdminCategories} from "@/webpages/AdminCategories/useAdminCategories";
import AdminCategoriesItem from "@/webpages/AdminCategories/AdminCategoriesItem/AdminCategoriesItem";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import {useAdminTypes} from "@/webpages/AdminTypes/useAdminTypes";
import AdminTypesItem from "@/webpages/AdminTypes/AdminTypesItem/AdminTypesItem";


const AdminTypes: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch
    } = useAdminTypes();

    const types = data?.data;

    return (
        <Admin title={` > Типы`}>
            <SecondaryButton
                link="/admin/types/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить тип
            </SecondaryButton>

            <HeaderSearch
                isPlaceholderLeft
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск типов"
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
                    : types && types.length ? <div>
                            <div className={styles.products}>
                                {
                                    Array.isArray(types) && types.map(type => (
                                        <AdminTypesItem
                                            key={type.id}
                                            type={type}
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

export default AdminTypes;

