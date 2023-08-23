import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {FormProvider} from "react-hook-form";
import {useArticleCreate} from "@/webpages/AdminArticlesCreate/useArticleCreate";
import {useAdminArticleForm} from "@/components/forms/AdminArticleForm/useAdminArticleForm";
import AdminArticleForm from "@/components/forms/AdminArticleForm/AdminArticleForm";

const AdminArticlesCreate: FC = () => {
    const adminArticleForm = useAdminArticleForm();
    const {onSubmit, isLoading} = useArticleCreate();

    return (
        <Admin title={` > Статьи > Новая статья`}>
            <FormProvider {...adminArticleForm}>
                <AdminArticleForm onSubmit={onSubmit} disabled={isLoading}/>
            </FormProvider>
        </Admin>
    );
}

export default AdminArticlesCreate;