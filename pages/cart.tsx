import Header from "@/components/Header/Header";
import Cart from "@/webpages/Cart/Cart";
import Footer from "@/components/Footer/Footer";
import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/lib/Meta/Meta";

const ContactPage: NextPageAuth = () => {
    return (
        <Meta title="Корзина">
            <Header />
            <div className="main">
                <Cart />
            </div>
            <Footer />
        </Meta>
    )
}
ContactPage.isOnlyUser = true

export default ContactPage;