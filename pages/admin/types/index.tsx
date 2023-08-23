import {NextPageAuth} from "@/types/authProvider";
import AdminTypes from "@/webpages/AdminTypes/AdminTypes";

const AdminProductsPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminTypes/>
        </div>
    )
}
AdminProductsPage.isOnlyAdmin = true;

export default AdminProductsPage;