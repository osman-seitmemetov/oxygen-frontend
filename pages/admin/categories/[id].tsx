import {NextPageAuth} from "@/types/authProvider";
import AdminCategory from "@/webpages/AdminCategory/AdminCategory";


const AdminCategoryPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminCategory />
        </div>
    )
}

AdminCategoryPage.isOnlyAdmin = true;

export default AdminCategoryPage;