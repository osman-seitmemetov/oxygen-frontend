import {NextPageAuth} from "@/types/authProvider";
import AdminArticle from "@/webpages/AdminArticle/AdminArticle";


const AdminArticlePage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminArticle />
        </div>
    )
}

AdminArticlePage.isOnlyAdmin = true;

export default AdminArticlePage;