import React, {FC} from "react";
import Admin from "@/components/Admin/Admin";
import {useArticleEdit} from "@/webpages/AdminArticle/useArticleEdit";
import {useAdminArticleForm} from "@/components/forms/AdminArticleForm/useAdminArticleForm";
import AdminArticleForm from "@/components/forms/AdminArticleForm/AdminArticleForm";
import AdminFormLoader from "@/components/Admin/AdminFormLoader/AdminFormLoader";
import {FormProvider} from "react-hook-form";


const AdminArticle: FC = () => {
    const adminArticleForm = useAdminArticleForm();
    const {onSubmit, isLoading, isUpdateLoading, data} = useArticleEdit(adminArticleForm.setValue);
    const article = data?.data;

    return (
        <Admin isLoading={isLoading} title={` > Статьи > ${article?.title}`}>
            {
                isLoading
                    ? <AdminFormLoader/>
                    : <FormProvider {...adminArticleForm}>
                        <AdminArticleForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                    </FormProvider>
            }
        </Admin>
    );
}

export default AdminArticle;

