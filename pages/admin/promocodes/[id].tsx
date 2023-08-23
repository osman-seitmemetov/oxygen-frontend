import {NextPageAuth} from "@/types/authProvider";
import AdminPromocode from "@/webpages/AdminPromocode/AdminPromocode";


const AdminCategoryPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminPromocode />
        </div>
    )
}

AdminCategoryPage.isOnlyAdmin = true;

export default AdminCategoryPage;