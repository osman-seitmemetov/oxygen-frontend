import {NextPageAuth} from "@/types/authProvider";
import AdminTypeCreate from "@/webpages/AdminTypeCreate/AdminTypeCreate";


const AdminCategoriesPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminTypeCreate/>
        </div>
    )
}

AdminCategoriesPage.isOnlyAdmin = true;

export default AdminCategoriesPage;