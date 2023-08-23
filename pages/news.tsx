import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import News from "@/webpages/News/News";
import Meta from "@/lib/Meta/Meta";

const OrdersPage: NextPage = () => {
    return (
        <Meta title="Новости" description="">
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <News />
            </div>
            <Footer/>
        </Meta>
    )
}

export default OrdersPage;