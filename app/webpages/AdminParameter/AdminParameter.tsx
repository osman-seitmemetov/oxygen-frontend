import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import AdminFormLoader from "@/components/Admin/AdminFormLoader/AdminFormLoader";
import AdminParameterForm from "@/components/forms/AdminParameterForm/AdminParameterForm";
import {useAdminParameterForm} from "@/components/forms/AdminParameterForm/useAdminParameterForm";
import {useAdminParameterEdit} from "@/webpages/AdminParameter/useAdminParameterEdit";


const AdminParameter: FC = () => {
    const adminCategoryForm = useAdminParameterForm();
    const {onSubmit, isLoading, data, isUpdateLoading} = useAdminParameterEdit(adminCategoryForm.setValue);
    const parameter = data?.data;

    return (
        <Admin isLoading={isLoading} title={` > Характеристики > ${parameter?.title}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminCategoryForm}>
                        <AdminParameterForm mode="EDIT" onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminParameter;

