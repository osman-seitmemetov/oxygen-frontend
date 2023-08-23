import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useAdminBrandForm} from "@/components/forms/AdminBrandForm/useAdminBrandForm";
import {useAdminBrandCreate} from "@/webpages/AdminBrandCreate/useAdminBrandCreate";
import AdminBrandForm from "@/components/forms/AdminBrandForm/AdminBrandForm";


const AdminBrandCreate: FC = () => {
    const adminCategoryForm = useAdminBrandForm();
    const {onSubmit, isLoading} = useAdminBrandCreate();

    return (
        <Admin title={` > Бренды > Новый бренд`}>
            <FormProvider {...adminCategoryForm}>
                <AdminBrandForm onSubmit={onSubmit} disabled={isLoading}/>
            </FormProvider>
        </Admin>
    );
}

export default AdminBrandCreate;

