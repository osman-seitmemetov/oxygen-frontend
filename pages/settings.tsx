import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/lib/Meta/Meta";
import Settings from "@/webpages/Settings/Settings";

const ProfilePage: NextPageAuth = () => {
    return (
        <Meta title="Настройки">
            <Header/>
            <div className="main">
                <Settings/>
            </div>
            <Footer/>
        </Meta>
    )
}

ProfilePage.isOnlyUser = true;

export default ProfilePage;