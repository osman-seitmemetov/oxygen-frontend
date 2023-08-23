import {NextPageAuth} from "@/types/authProvider";
import AdminBannersCreate from "@/webpages/AdminBannersCreate/AdminBannersCreate";


const AdminBannerCreatePage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminBannersCreate/>
        </div>
    )
}

AdminBannerCreatePage.isOnlyAdmin = true;

export default AdminBannerCreatePage;