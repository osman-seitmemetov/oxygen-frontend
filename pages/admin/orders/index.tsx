import {NextPageAuth} from "@/types/authProvider";
import AdminOrders from "@/webpages/AdminOrders/AdminOrders";

const AdminBannersPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminOrders/>
        </div>
    )
}

AdminBannersPage.isOnlyAdmin = true;

export default AdminBannersPage;