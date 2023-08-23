import {NextPageAuth} from "@/types/authProvider";
import AdminProduct from "@/webpages/AdminProduct/AdminProduct";


const AdminProductPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminProduct />
        </div>
    )
}

AdminProductPage.isOnlyAdmin = true;

export default AdminProductPage;