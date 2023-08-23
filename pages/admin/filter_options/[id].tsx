import {NextPageAuth} from "@/types/authProvider";
import AdminFilterOption from "@/webpages/AdminFilterOption/AdminFilterOption";


const AdminCategoryPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminFilterOption/>
        </div>
    )
}

AdminCategoryPage.isOnlyAdmin = true;

export default AdminCategoryPage;