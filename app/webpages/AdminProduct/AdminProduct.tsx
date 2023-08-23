import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider, useFieldArray} from "react-hook-form";
import {useProductEdit} from "@/webpages/AdminProduct/useProductEdit";
import {useAdminProductForm} from "@/components/forms/AdminProductForm/useAdminProductForm";
import AdminProductForm from "@/components/forms/AdminProductForm/AdminProductForm";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";

const AdminProduct: FC = () => {
    const adminProductForm = useAdminProductForm();

    const fieldArray = useFieldArray({
        control: adminProductForm.control, name: 'info'
    })
    const {onSubmit, isLoading, data, isUpdateLoading} = useProductEdit(adminProductForm.setValue, fieldArray.append);
    const product = data?.data;

    return (
        <Admin title={` > Товары > ${product?.name}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminProductForm}>
                        <AdminProductForm
                            onSubmit={onSubmit}
                            disabled={isUpdateLoading}
                            fieldArray={fieldArray}
                            mode="EDIT"
                        />
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminProduct;

