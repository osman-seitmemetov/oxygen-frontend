import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useCategoryEdit} from "@/webpages/AdminCategory/useCategoryEdit";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import {useAdminCategoryForm} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import AdminCategoryForm from "@/components/forms/AdminCategoryForm/AdminCategoryForm";
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
                        <AdminParameterForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminParameter;

