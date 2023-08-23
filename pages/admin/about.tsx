import {NextPageAuth} from "@/types/authProvider";
import AdminAbout from "@/webpages/AdminAbout/AdminAbout";
import Meta from "@/lib/Meta/Meta";

const AdminBannersPage: NextPageAuth = () => {
    return (
        <Meta title="O компании">
            <div className="main">
                <AdminAbout/>
            </div>
        </Meta>
    )
}

AdminBannersPage.isOnlyAdmin = true;

export default AdminBannersPage;