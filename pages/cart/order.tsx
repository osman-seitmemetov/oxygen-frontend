import Header from "@/components/Header/Header";
import CartOrder from "@/webpages/CartOrder/CartOrder";
import Footer from "@/components/Footer/Footer";
import {NextPageAuth} from "@/types/authProvider";

const CartOrderPage: NextPageAuth = () => {
    return (
        <>
            <Header />
            <div className="main">
                <CartOrder />
            </div>
            <Footer />
        </>
    )
}
CartOrderPage.isOnlyUser = true

export default CartOrderPage;