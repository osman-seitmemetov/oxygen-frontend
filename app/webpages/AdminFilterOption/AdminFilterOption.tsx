import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import AdminFormLoader from "@/components/Admin/AdminFormLoader/AdminFormLoader";
import {useAdminFilterOptionEdit} from "@/webpages/AdminFilterOption/useAdminFilterOptionEdit";
import AdminFilterOptionForm from "@/components/forms/AdminFilterOptionForm/AdminFilterOptionForm";
import {useAdminFilterOptionForm} from "@/components/forms/AdminFilterOptionForm/useAdminFilterOptionForm";


const AdminFilterOption: FC = () => {
    const adminFilterOptionForm = useAdminFilterOptionForm();
    const {onSubmit, isLoading, data, isUpdateLoading} = useAdminFilterOptionEdit(adminFilterOptionForm.setValue);
    const filterOption = data?.data;

    return (
        <Admin isLoading={isLoading} title={` > Опции фильтров > ${filterOption?.title}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminFilterOptionForm}>
                        <AdminFilterOptionForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminFilterOption;

