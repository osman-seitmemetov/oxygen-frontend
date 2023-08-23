import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useAdminFilterOptionCreate} from "@/webpages/AdminFilterOptionCreate/useAdminFilterOptionCreate";
import {useAdminFilterOptionForm} from "@/components/forms/AdminFilterOptionForm/useAdminFilterOptionForm";
import AdminFilterOptionForm from "@/components/forms/AdminFilterOptionForm/AdminFilterOptionForm";


const AdminFilterOptionCreate: FC = () => {
    const adminFilterOptionForm = useAdminFilterOptionForm();
    const {onSubmit, isLoading} = useAdminFilterOptionCreate();

    return (
        <Admin title={` > Опции фильтров > Новая опция фильтров`}>
            <FormProvider {...adminFilterOptionForm}>
                <AdminFilterOptionForm onSubmit={onSubmit} disabled={isLoading}/>
            </FormProvider>
        </Admin>
    );
}

export default AdminFilterOptionCreate;

