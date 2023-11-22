import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {useAdminBanners} from "@/webpages/AdminBanners/useAdminBanners";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import AdminTable from "@/components/Admin/AdminTable/AdminTable";


const AdminBanners: FC = () => {
    const {data, isLoading, deleteAsync} = useAdminBanners();

    return (
        <Admin title=" > Баннеры">
            <SecondaryButton
                link="/admin/banner/create"
                style={{maxWidth: '300px', marginBottom: 20}}
            >
                Добавить новый баннер
            </SecondaryButton>

            <b>добавить drag&apos;n&apos;drop</b>

            <AdminTable
                tableItems={data || []}
                headerItems={['Изображение', 'Название']}
                isLoading={isLoading}
                removeHandler={deleteAsync}
            />
        </Admin>
    );
}

export default AdminBanners;