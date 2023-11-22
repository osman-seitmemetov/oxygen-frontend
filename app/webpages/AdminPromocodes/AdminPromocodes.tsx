import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import {useAdminPromocodes} from "@/webpages/AdminPromocodes/useAdminPromocodes";
import AdminTable from "@/components/Admin/AdminTable/AdminTable";


const AdminPromocodes: FC = () => {
    const {data, isLoading, deleteAsync, searchTerm, handleSearch} = useAdminPromocodes();

    return (
        <Admin title={` > Промокоды`}>
            <SecondaryButton
                link="/admin/promocodes/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить промокод
            </SecondaryButton>

            <HeaderSearch
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск промокодов"
            />

            <AdminTable
                tableItems={data || []}
                headerItems={['Название', 'Значение', 'Категории']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
            />
        </Admin>
    );
}

export default AdminPromocodes;

