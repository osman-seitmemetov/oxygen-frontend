import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider, useFieldArray} from "react-hook-form";
import {useProductCreate} from "@/webpages/AdminProductsCreate/useProductCreate";
import {useAdminProductForm} from "@/components/forms/AdminProductForm/useAdminProductForm";
import AdminProductForm from "@/components/forms/AdminProductForm/AdminProductForm";


const AdminProductsCreate: FC = () => {
    const adminProductForm = useAdminProductForm();
    const {onSubmit, isLoading} = useProductCreate();

    const fieldArray = useFieldArray({
        control: adminProductForm.control, name: 'info'
    })

    return (
        <Admin title={` > Товары > Новый товар`}>
            <FormProvider {...adminProductForm}>
                <AdminProductForm
                    onSubmit={onSubmit}
                    disabled={isLoading}
                    fieldArray={fieldArray}
                    mode="CREATE"
                />
            </FormProvider>
        </Admin>
    );
}

export default AdminProductsCreate;

