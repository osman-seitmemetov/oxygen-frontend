import {NextPageAuth} from "@/types/authProvider";
import AdminProducts from "@/webpages/AdminProducts/AdminProducts";

const AdminProductsPage: NextPageAuth = () => {
    return (

        <div className="main">
            <AdminProducts/>
        </div>
    )
}
AdminProductsPage.isOnlyAdmin = true;

export default AdminProductsPage;