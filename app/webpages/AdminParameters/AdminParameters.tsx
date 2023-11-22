import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import {useAdminParameters} from "@/webpages/AdminParameters/useAdminParameters";
import AdminTable from "@/components/Admin/AdminTable/AdminTable";


const AdminParameters: FC = () => {
    const {data, isLoading, deleteAsync, searchTerm, handleSearch} = useAdminParameters();
    console.log("__DATA__", data);

    return (
        <Admin title={` > Характеристики`}>
            <SecondaryButton
                link="/admin/parameters/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить категорию
            </SecondaryButton>

            <HeaderSearch
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск категорий"
            />

            <AdminTable
                tableItems={data || []}
                headerItems={['Название']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
            />
        </Admin>
    );
}

export default AdminParameters;

