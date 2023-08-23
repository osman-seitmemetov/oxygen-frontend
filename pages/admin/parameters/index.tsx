import {NextPageAuth} from "@/types/authProvider";
import AdminParameters from "@/webpages/AdminParameters/AdminParameters";

const AdminProductsPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminParameters/>
        </div>
    )
}
AdminProductsPage.isOnlyAdmin = true;

export default AdminProductsPage;