import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminFilterOptions.module.scss";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import {useAdminFilterOptions} from "@/webpages/AdminFilterOptions/useAdminFilterOptions";
import AdminFilterOptionsItem from "@/webpages/AdminFilterOptions/AdminFilterOptionsItem/AdminFilterOptionsItem";


const AdminFilterOptions: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch
    } = useAdminFilterOptions();
    const filterOptions = data?.data;

    return (
        <Admin title={` > Опции фильтров`}>
            <ButtonTransparent
                link="/admin/filter_options/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить группу фильтров
            </ButtonTransparent>

            <HeaderSearch
                isPlaceholderLeft
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск опций фильтров"
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
                    : filterOptions && filterOptions.length ? <div>
                            <div className={styles.products}>
                                {
                                    Array.isArray(filterOptions) && filterOptions.map(filterOption => (
                                        <AdminFilterOptionsItem
                                            key={filterOption.id}
                                            filterOption={filterOption}
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

export default AdminFilterOptions;

