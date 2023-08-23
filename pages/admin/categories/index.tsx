import {NextPageAuth} from "@/types/authProvider";
import AdminCategories from "@/webpages/AdminCategories/AdminCategories";

const AdminProductsPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminCategories/>
        </div>
    )
}
AdminProductsPage.isOnlyAdmin = true;

export default AdminProductsPage;