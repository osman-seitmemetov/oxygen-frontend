import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useCategoryEdit} from "@/webpages/AdminCategory/useCategoryEdit";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import {useAdminCategoryForm} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import AdminCategoryForm from "@/components/forms/AdminCategoryForm/AdminCategoryForm";


const AdminCategory: FC = () => {
    const adminCategoryForm = useAdminCategoryForm();
    const {onSubmit, isLoading, data, isUpdateLoading} = useCategoryEdit(adminCategoryForm.setValue);
    const category = data?.data;

    return (
        <Admin isLoading={isLoading} title={` > Категории > ${category?.name}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminCategoryForm}>
                        <AdminCategoryForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminCategory;

