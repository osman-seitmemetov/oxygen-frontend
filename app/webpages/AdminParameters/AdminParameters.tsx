import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminParameters.module.scss";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import {useAdminParameters} from "@/webpages/AdminParameters/useAdminParameters";
import AdminParametersItem from "@/webpages/AdminParameters/AdminParametersItem/AdminParametersItem";


const AdminParameters: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch
    } = useAdminParameters();

    const parameters = data?.data;

    return (
        <Admin title={` > Характеристики`}>
            <SecondaryButton
                link="/admin/parameters/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить категорию
            </SecondaryButton>

            <HeaderSearch
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
                    : parameters && parameters.length ? <div>
                            <div className={styles.products}>
                                {
                                    Array.isArray(parameters) && parameters.map(parameter => (
                                        <AdminParametersItem
                                            key={parameter.id}
                                            parameter={parameter}
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

export default AdminParameters;

