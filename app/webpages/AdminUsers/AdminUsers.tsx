import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {useAdminUsers} from "@/webpages/AdminUsers/useAdminUsers";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import AdminTable from "@/components/Admin/AdminTable/AdminTable";

const AdminUsers: FC = () => {
    const {data, isLoading, searchTerm, handleSearch, deleteAsync} = useAdminUsers();

    return (
        <Admin title=" > Пользователи">
            <HeaderSearch
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск пользователей"
            />

            <AdminTable
                tableItems={data || []}
                headerItems={['Имя', 'Роль']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
            />
        </Admin>
    );
}

export default AdminUsers;