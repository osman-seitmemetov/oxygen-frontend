import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useAdminTypeForm} from "@/components/forms/AdminTypeForm/useAdminTypeForm";
import {useAdminTypeCreate} from "@/webpages/AdminTypeCreate/useAdminTypeCreate";
import AdminTypeForm from "@/components/forms/AdminTypeForm/AdminTypeForm";


const AdminTypeCreate: FC = () => {
    const adminTypeForm = useAdminTypeForm();
    const {onSubmit, isLoading} = useAdminTypeCreate();

    return (
        <Admin title={` > Типы > Новый тип`}>
            <FormProvider {...adminTypeForm}>
                <AdminTypeForm onSubmit={onSubmit} disabled={isLoading}/>
            </FormProvider>
        </Admin>
    );
}

export default AdminTypeCreate;

