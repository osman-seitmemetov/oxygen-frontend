import {NextPageAuth} from "@/types/authProvider";
import AdminArticlesCreate from "@/webpages/AdminArticlesCreate/AdminArticlesCreate";


const AdminArticlePage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminArticlesCreate />
        </div>
    )
}

AdminArticlePage.isOnlyAdmin = true;

export default AdminArticlePage;