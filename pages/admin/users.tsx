import AdminUsers from "@/webpages/AdminUsers/AdminUsers";
import {NextPageAuth} from "@/types/authProvider";

const AdminUsersPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminUsers/>
        </div>
    )
}
AdminUsersPage.isOnlyAdmin = true;

export default AdminUsersPage;