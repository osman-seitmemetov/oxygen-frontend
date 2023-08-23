import {NextPageAuth} from "@/types/authProvider";
import AdminFilterGroupCreate from "@/webpages/AdminFilterGroupCreate/AdminFilterGroupCreate";


const AdminCategoriesPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminFilterGroupCreate/>
        </div>
    )
}

AdminCategoriesPage.isOnlyAdmin = true;

export default AdminCategoriesPage;