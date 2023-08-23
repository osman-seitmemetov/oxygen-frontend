import {NextPageAuth} from "@/types/authProvider";
import AdminParameter from "@/webpages/AdminParameter/AdminParameter";


const AdminCategoryPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminParameter/>
        </div>
    )
}

AdminCategoryPage.isOnlyAdmin = true;

export default AdminCategoryPage;