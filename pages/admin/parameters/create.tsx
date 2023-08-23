import {NextPageAuth} from "@/types/authProvider";
import AdminParameterCreate from "@/webpages/AdminParameterCreate/AdminParameterCreate";


const AdminCategoriesPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminParameterCreate/>
        </div>
    )
}

AdminCategoriesPage.isOnlyAdmin = true;

export default AdminCategoriesPage;