import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useCategoriesCreate} from "@/webpages/AdminCategoriesCreate/useCategoriesCreate";
import AdminCategoryForm from "@/components/forms/AdminCategoryForm/AdminCategoryForm";
import {useAdminCategoryForm} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";


const AdminCategoriesCreate: FC = () => {
    const adminCategoryForm = useAdminCategoryForm();
    const {onSubmit, isLoading} = useCategoriesCreate();

    return (
        <Admin title={` > Категории > Новая категория`}>
            <FormProvider {...adminCategoryForm}>
                <AdminCategoryForm onSubmit={onSubmit} disabled={isLoading}/>
            </FormProvider>
        </Admin>
    );
}

export default AdminCategoriesCreate;

