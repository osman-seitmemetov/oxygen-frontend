import {NextPageAuth} from "@/types/authProvider";
import AdminPromocodes from "@/webpages/AdminPromocodes/AdminPromocodes";

const AdminProductsPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminPromocodes/>
        </div>
    )
}
AdminProductsPage.isOnlyAdmin = true;

export default AdminProductsPage;