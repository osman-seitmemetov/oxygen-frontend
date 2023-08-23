import {NextPageAuth} from "@/types/authProvider";
import AdminBrands from "@/webpages/AdminBrands/AdminBrands";

const AdminProductsPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminBrands/>
        </div>
    )
}
AdminProductsPage.isOnlyAdmin = true;

export default AdminProductsPage;