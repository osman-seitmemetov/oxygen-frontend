import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminCategories.module.scss";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import InputSearch from "@/UI/InputSearch/InputSearch";
import {useAdminCategories} from "@/webpages/AdminCategories/useAdminCategories";
import AdminCategoriesItem from "@/webpages/AdminCategories/AdminCategoriesItem/AdminCategoriesItem";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


const AdminCategories: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch
    } = useAdminCategories();

    const categories = data?.data;

    return (
        <Admin title={` > Категории`}>
            <ButtonTransparent
                link="/admin/categories/create"
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
                    : categories && categories.length ? <div>
                            <div className={styles.products}>
                                {
                                    Array.isArray(categories) && categories.map(category => (
                                        <AdminCategoriesItem
                                            key={category.id}
                                            category={category}
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

export default AdminCategories;
