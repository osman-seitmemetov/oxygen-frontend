import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useBannersCreate} from "@/webpages/AdminBannersCreate/useBannersCreate";
import AdminBannerForm from "@/components/forms/AdminBannerForm/AdminBannerForm";
import {useAdminBannerForm} from "@/components/forms/AdminBannerForm/useAdminBannerForm";


const AdminBannersCreate: FC = () => {
    const adminBannerForm = useAdminBannerForm();
    const {onSubmit, isLoading} = useBannersCreate();

    return (
        <Admin title={` > Баннеры > Новый баннер`}>
            <FormProvider {...adminBannerForm}>
                <AdminBannerForm onSubmit={onSubmit} disabled={isLoading}/>
            </FormProvider>
        </Admin>
    );
}

export default AdminBannersCreate;

