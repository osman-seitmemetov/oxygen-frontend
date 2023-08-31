import React, {FC, useState} from "react";
import styles from './AdminUsers.module.scss';
import Admin from "@/components/Admin/Admin";
import {useUsers} from "@/webpages/AdminUsers/useUsers";
import AdminUsersItem from "@/webpages/AdminUsers/AdminUsersItem/AdminUsersItem";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";

const AdminUsers: FC = () => {
    const {data, isLoading, searchTerm, handleSearch, deleteAsync} = useUsers();
    const users = data?.data;
    const [activeModal, setActiveModal] = useState(false);


    return (
        <Admin title=" > Пользователи">
            <HeaderSearch
                isPlaceholderLeft
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск пользователей"
            />

            {
                isLoading
                    ? <div>loading...</div>
                    : <div className={styles.users}>
                        {
                            users?.length ? Array.isArray(users) && users.map(user => (
                                <AdminUsersItem
                                    key={user.id}
                                    user={user}
                                    activeModal={activeModal}
                                    setActiveModal={setActiveModal}
                                    removeHandler={deleteAsync}
                                />
                            ))
                                : <div>Пользователи не найдены</div>
                        }
                    </div>
            }
        </Admin>
    );
}

export default AdminUsers;