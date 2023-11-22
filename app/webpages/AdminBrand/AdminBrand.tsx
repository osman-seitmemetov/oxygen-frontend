import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import AdminFormLoader from "@/components/Admin/AdminFormLoader/AdminFormLoader";
import {useAdminBrandEdit} from "@/webpages/AdminBrand/useAdminBrandEdit";
import AdminBrandForm from "@/components/forms/AdminBrandForm/AdminBrandForm";
import {useAdminBrandForm} from "@/components/forms/AdminBrandForm/useAdminBrandForm";


const AdminBrand: FC = () => {
    const adminBrandForm = useAdminBrandForm();
    const {onSubmit, isLoading, data, isUpdateLoading} = useAdminBrandEdit(adminBrandForm.setValue);
    const brand = data?.data;

    return (
        <Admin isLoading={isLoading} title={` > Бренды > ${brand?.name}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminBrandForm}>
                        <AdminBrandForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminBrand;

