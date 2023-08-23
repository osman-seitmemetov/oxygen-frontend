import {NextPageAuth} from "@/types/authProvider";
import AdminBanner from "@/webpages/AdminBanner/AdminBanner";


const AdminBannerPage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminBanner />
        </div>
    )
}

AdminBannerPage.isOnlyAdmin = true;

export default AdminBannerPage;