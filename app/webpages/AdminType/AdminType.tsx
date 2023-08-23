import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import AdminTypeForm from "@/components/forms/AdminTypeForm/AdminTypeForm";
import {useAdminTypeForm} from "@/components/forms/AdminTypeForm/useAdminTypeForm";
import {useAdminTypeEdit} from "@/webpages/AdminType/useAdminTypeEdit";


const AdminType: FC = () => {
    const adminTypeForm = useAdminTypeForm();
    const {onSubmit, isLoading, data, isUpdateLoading} = useAdminTypeEdit(adminTypeForm.setValue);
    const category = data?.data;

    return (
        <Admin isLoading={isLoading} title={` > Типы > ${category?.name}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminTypeForm}>
                        <AdminTypeForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminType;

