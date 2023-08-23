import {NextPageAuth} from "@/types/authProvider";
import AdminArticles from "@/webpages/AdminArticles/AdminArticles";


const AdminArticlePage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminArticles />
        </div>
    )
}

AdminArticlePage.isOnlyAdmin = true;

export default AdminArticlePage;