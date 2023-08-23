import {NextPageAuth} from "@/types/authProvider";
import AdminCategoriesCreate from "@/webpages/AdminCategoriesCreate/AdminCategoriesCreate";


const AdminCategoriesPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminCategoriesCreate/>
        </div>
    )
}

AdminCategoriesPage.isOnlyAdmin = true;

export default AdminCategoriesPage;