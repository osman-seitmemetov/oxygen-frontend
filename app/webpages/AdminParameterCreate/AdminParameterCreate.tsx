import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useAdminParameterForm} from "@/components/forms/AdminParameterForm/useAdminParameterForm";
import AdminParameterForm from "@/components/forms/AdminParameterForm/AdminParameterForm";
import {useAdminParameterCreate} from "@/webpages/AdminParameterCreate/useAdminParameterCreate";


const AdminParameterCreate: FC = () => {
    const adminParameterForm = useAdminParameterForm();
    const {onSubmit, isLoading} = useAdminParameterCreate();

    return (
        <Admin title={` > Характеристики > Новая характеристика`}>
            <FormProvider {...adminParameterForm}>
                <AdminParameterForm mode="CREATE" onSubmit={onSubmit} disabled={isLoading}/>
            </FormProvider>
        </Admin>
    );
}

export default AdminParameterCreate;

