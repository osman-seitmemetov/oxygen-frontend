import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import {useAdminProducts} from "@/webpages/AdminProducts/useAdminProducts";
import AdminTable from "@/components/Admin/AdminTable/AdminTable";


const AdminArticles: FC = () => {
    const {data, isLoading, deleteAsync, searchTerm, handleSearch} = useAdminProducts();

    return (
        <Admin title={` > Товары`}>
            <SecondaryButton
                link="/admin/products/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить товар
            </SecondaryButton>

            <HeaderSearch
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск товаров"
            />

            <AdminTable
                tableItems={data || []}
                headerItems={['Изображение', 'Название', 'Цена', 'Количество']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
            />
        </Admin>
    );
}

export default AdminArticles;

