import {NextPageAuth} from "@/types/authProvider";
import AdminFilterGroup from "@/webpages/AdminFilterGroup/AdminFilterGroup";


const AdminCategoryPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminFilterGroup/>
        </div>
    )
}

AdminCategoryPage.isOnlyAdmin = true;

export default AdminCategoryPage;