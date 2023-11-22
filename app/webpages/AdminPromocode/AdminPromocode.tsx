import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {usePromocodeEdit} from "@/webpages/AdminPromocode/usePromocodeEdit";
import {useAdminPromocodeForm} from "@/components/forms/AdminPromocodeForm/useAdminPromocodeForm";
import AdminFormLoader from "@/components/Admin/AdminFormLoader/AdminFormLoader";
import AdminPromocodeForm from "@/components/forms/AdminPromocodeForm/AdminPromocodeForm";


const AdminPromocode: FC = () => {
    const adminPromocodeForm = useAdminPromocodeForm();
    const {onSubmit, isLoading, data, isUpdateLoading} = usePromocodeEdit(adminPromocodeForm.setValue);
    const promocode = data?.data;

    return (
        <Admin title={` > Промокоды > ${promocode?.title}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminPromocodeForm}>
                        <AdminPromocodeForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminPromocode;

