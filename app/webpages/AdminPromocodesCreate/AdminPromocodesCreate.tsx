import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {usePromocodesCreate} from "@/webpages/AdminPromocodesCreate/usePromocodesCreate";
import {useAdminPromocodeForm} from "@/components/forms/AdminPromocodeForm/useAdminPromocodeForm";
import AdminPromocodeForm from "@/components/forms/AdminPromocodeForm/AdminPromocodeForm";


const AdminPromocodesCreate: FC = () => {
    const adminPromocodeForm = useAdminPromocodeForm();
    const {onSubmit, isLoading} = usePromocodesCreate();

    return (
        <Admin title={` > Промокоды > Новый промокод`}>
            <FormProvider {...adminPromocodeForm}>
                <AdminPromocodeForm onSubmit={onSubmit} disabled={isLoading}/>
            </FormProvider>
        </Admin>
    );
}

export default AdminPromocodesCreate;

