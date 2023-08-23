import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CartPay from "@/webpages/CartPay/CartPay";
import {NextPageAuth} from "@/types/authProvider";

const CartOrderPage: NextPageAuth = () => {
    return (
        <>
            <Header />
            <div className="main">
                <CartPay />
            </div>
            <Footer />
        </>
    )
}

CartOrderPage.isOnlyUser = true

export default CartOrderPage;