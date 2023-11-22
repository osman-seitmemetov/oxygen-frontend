import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import {useAdminBrands} from "@/webpages/AdminBrands/useAdminBrands";
import AdminTable from "@/components/Admin/AdminTable/AdminTable";


const AdminBrands: FC = () => {
    const {data, isLoading, deleteAsync, searchTerm, handleSearch} = useAdminBrands();

    return (
        <Admin title={` > Бренды`}>
            <SecondaryButton
                link="/admin/brands/create"
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
                headerItems={['Логотип', 'Название']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
            />
        </Admin>
    );
}

export default AdminBrands;

