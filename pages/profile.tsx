import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Profile from "@/webpages/Profile/Profile";
import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/lib/Meta/Meta";

const ProfilePage: NextPageAuth = () => {
    return (
        <Meta title="Имя Фамилия">
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Profile />
            </div>
            <Footer/>
        </Meta>
    )
}

ProfilePage.isOnlyUser = true;

export default ProfilePage;