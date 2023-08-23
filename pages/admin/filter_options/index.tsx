import {NextPageAuth} from "@/types/authProvider";
import AdminFilterOptions from "@/webpages/AdminFilterOptions/AdminFilterOptions";

const AdminProductsPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminFilterOptions/>
        </div>
    )
}
AdminProductsPage.isOnlyAdmin = true;

export default AdminProductsPage;