import {NextPageAuth} from "@/types/authProvider";
import AdminPromocodesCreate from "@/webpages/AdminPromocodesCreate/AdminPromocodesCreate";


const AdminCategoriesPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminPromocodesCreate/>
        </div>
    )
}

AdminCategoriesPage.isOnlyAdmin = true;

export default AdminCategoriesPage;