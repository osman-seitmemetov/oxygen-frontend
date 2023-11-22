import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {useAdminArticles} from "@/webpages/AdminArticles/useAdminArticles";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import AdminTable from "@/components/Admin/AdminTable/AdminTable";


const AdminArticles: FC = () => {
    const {data, isLoading, deleteAsync, searchTerm, handleSearch} = useAdminArticles();

    return (
        <Admin title={` > Статьи`}>
            <SecondaryButton
                link="/admin/articles/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >Создать статью</SecondaryButton>

            <HeaderSearch
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                placeholder="Поиск статей"
            />

            <AdminTable
                tableItems={data || []}
                headerItems={['Превью', 'Название', 'Дата публикации']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
            />
        </Admin>
    );
}

export default AdminArticles;

