import {NextPageAuth} from "@/types/authProvider";
import AdminFilterOptionCreate from "@/webpages/AdminFilterOptionCreate/AdminFilterOptionCreate";


const AdminCategoriesPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminFilterOptionCreate/>
        </div>
    )
}

AdminCategoriesPage.isOnlyAdmin = true;

export default AdminCategoriesPage;