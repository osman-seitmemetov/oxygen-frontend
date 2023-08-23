import {NextPageAuth} from "@/types/authProvider";
import AdminBrand from "@/webpages/AdminBrand/AdminBrand";


const AdminCategoryPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminBrand/>
        </div>
    )
}

AdminCategoryPage.isOnlyAdmin = true;

export default AdminCategoryPage;