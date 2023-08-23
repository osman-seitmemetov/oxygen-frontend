import React, {FC, useState} from "react";
import Admin from "@/components/Admin/Admin";
import styles from "./AdminFilterGroups.module.scss";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import InputSearch from "@/UI/InputSearch/InputSearch";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import AdminFilterGroupsItem from "@/webpages/AdminFilterGroups/AdminFilterGroupsItem/AdminFilterGroupsItem";
import {useAdminFilterGroups} from "@/webpages/AdminFilterGroups/useAdminFilterGroups";


const AdminFilterGroups: FC = () => {
    const [activeModal, setActiveModal] = useState(false);

    const {
        data,
        isLoading,
        deleteAsync,
        searchTerm,
        handleSearch
    } = useAdminFilterGroups();
    const filterGroups = data?.data;

    return (
        <Admin title={` > Группы фильтров`}>
            <ButtonTransparent
                link="/admin/filter_groups/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить группу фильтров
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
                    : filterGroups && filterGroups.length ? <div>
                            <div className={styles.products}>
                                {
                                    Array.isArray(filterGroups) && filterGroups.map(filterGroup => (
                                        <AdminFilterGroupsItem
                                            key={filterGroup.id}
                                            filterGroup={filterGroup}
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

export default AdminFilterGroups;

