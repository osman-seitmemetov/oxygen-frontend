import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import {useAdminTypes} from "@/webpages/AdminTypes/useAdminTypes";
import AdminTable from "@/components/Admin/AdminTable/AdminTable";


const AdminTypes: FC = () => {
    const {data, isLoading, deleteAsync, searchTerm, handleSearch} = useAdminTypes();

    return (
        <Admin title={` > Типы`}>
            <SecondaryButton
                link="/admin/types/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить тип
            </SecondaryButton>

            <HeaderSearch
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск типов"
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

export default AdminTypes;

