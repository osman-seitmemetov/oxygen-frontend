import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useAdminFilterGroupForm} from "@/components/forms/AdminFilterGroupForm/useAdminFilterGroupForm";
import AdminFilterGroupForm from "@/components/forms/AdminFilterGroupForm/AdminFilterGroupForm";
import {useAdminFilterGroupCreate} from "@/webpages/AdminFilterGroupCreate/useAdminFilterGroupCreate";


const AdminFilterGroupCreate: FC = () => {
    const adminFilterGroupForm = useAdminFilterGroupForm();
    const {onSubmit, isLoading} = useAdminFilterGroupCreate();

    return (
        <Admin title={` > Группы фильтров > Новая группа фильтров`}>
            <FormProvider {...adminFilterGroupForm}>
                <AdminFilterGroupForm onSubmit={onSubmit} disabled={isLoading}/>
            </FormProvider>
        </Admin>
    );
}

export default AdminFilterGroupCreate;

