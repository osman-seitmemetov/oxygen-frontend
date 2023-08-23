import {NextPageAuth} from "@/types/authProvider";
import AdminProductsCreate from "@/webpages/AdminProductsCreate/AdminProductsCreate";


const AdminProductsPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminProductsCreate/>
        </div>
    )
}

AdminProductsPage.isOnlyAdmin = true;

export default AdminProductsPage;