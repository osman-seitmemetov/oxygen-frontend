import {NextPageAuth} from "@/types/authProvider";
import AdminBrandCreate from "@/webpages/AdminBrandCreate/AdminBrandCreate";


const AdminCategoriesPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminBrandCreate/>
        </div>
    )
}

AdminCategoriesPage.isOnlyAdmin = true;

export default AdminCategoriesPage;