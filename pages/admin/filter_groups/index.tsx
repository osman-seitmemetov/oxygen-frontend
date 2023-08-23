import {NextPageAuth} from "@/types/authProvider";
import AdminFilterGroups from "@/webpages/AdminFilterGroups/AdminFilterGroups";

const AdminProductsPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminFilterGroups/>
        </div>
    )
}
AdminProductsPage.isOnlyAdmin = true;

export default AdminProductsPage;