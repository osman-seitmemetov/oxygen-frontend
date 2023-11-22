import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useBannerEdit} from "@/webpages/AdminBanner/useBannerEdit";
import AdminBannerForm from "@/components/forms/AdminBannerForm/AdminBannerForm";
import {useAdminBannerForm} from "@/components/forms/AdminBannerForm/useAdminBannerForm";
import AdminFormLoader from "@/components/Admin/AdminFormLoader/AdminFormLoader";


const AdminBanner: FC = () => {
    const adminBannerForm = useAdminBannerForm();
    const {onSubmit, isLoading, data, isUpdateLoading} = useBannerEdit(adminBannerForm.setValue);
    const banner = data?.data;

    return (
        <Admin isLoading={isLoading} title={` > Баннеры > ${banner?.title}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminBannerForm}>
                        <AdminBannerForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminBanner;

