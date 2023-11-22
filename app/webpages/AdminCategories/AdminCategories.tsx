import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import {useAdminCategories} from "@/webpages/AdminCategories/useAdminCategories";
import AdminTable from "@/components/Admin/AdminTable/AdminTable";


const AdminCategories: FC = () => {
    const {data, isLoading, deleteAsync, searchTerm, handleSearch} = useAdminCategories();

    return (
        <Admin title={` > Категории`}>
            <SecondaryButton
                link="/admin/categories/create"
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
                headerItems={['Изображение', 'Название']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
            />
        </Admin>
    );
}

export default AdminCategories;

