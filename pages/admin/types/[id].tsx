import {NextPageAuth} from "@/types/authProvider";
import AdminType from "@/webpages/AdminType/AdminType";


const AdminCategoryPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminType/>
        </div>
    )
}

AdminCategoryPage.isOnlyAdmin = true;

export default AdminCategoryPage;