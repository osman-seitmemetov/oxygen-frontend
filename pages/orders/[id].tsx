import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import OrderDetail from "@/webpages/OrderDetail/OrderDetail";
import {NextPageAuth} from "@/types/authProvider";

const OrdersPage: NextPageAuth = () => {
    return (
        <>
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <OrderDetail />
            </div>
            <Footer/>
        </>
    )
}
OrdersPage.isOnlyUser = true

export default OrdersPage;