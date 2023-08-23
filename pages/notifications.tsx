import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Notifications from "@/webpages/Notifications/Notifications";
import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/lib/Meta/Meta";

const NotificationsPage: NextPageAuth = () => {
    return (
        <Meta title="Уведомления">
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Notifications />
            </div>
            <Footer/>
        </Meta>
    )
}
NotificationsPage.isOnlyUser = true;

export default NotificationsPage;