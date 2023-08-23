import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import {useAdminFilterGroupForm} from "@/components/forms/AdminFilterGroupForm/useAdminFilterGroupForm";
import AdminFilterGroupForm from "@/components/forms/AdminFilterGroupForm/AdminFilterGroupForm";
import {useAdminFilterGroupEdit} from "@/webpages/AdminFilterGroup/useAdminFilterGroupEdit";


const AdminFilterGroup: FC = () => {
    const adminFilterGroupForm = useAdminFilterGroupForm();
    const {onSubmit, isLoading, data, isUpdateLoading} = useAdminFilterGroupEdit(adminFilterGroupForm.setValue);
    const filterGroup = data?.data;

    return (
        <Admin isLoading={isLoading} title={` > Группы фильтров > ${filterGroup?.title}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminFilterGroupForm}>
                        <AdminFilterGroupForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminFilterGroup;

