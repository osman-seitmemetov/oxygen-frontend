import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Promocodes from "@/webpages/Promocodes/Promocodes";
import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/lib/Meta/Meta";

const PromocodesPage: NextPageAuth = () => {
    return (
        <Meta title="Промокоды">
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Promocodes />
            </div>
            <Footer/>
        </Meta>
    )
}

PromocodesPage.isOnlyUser = true;

export default PromocodesPage;