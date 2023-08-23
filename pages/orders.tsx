import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Orders from "@/webpages/Orders/Orders";
import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/lib/Meta/Meta";

const OrdersPage: NextPageAuth = () => {
    return (
        <Meta title="История заказов">
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Orders />
            </div>
            <Footer/>
        </Meta>
    )
}
OrdersPage.isOnlyUser = true

export default OrdersPage;