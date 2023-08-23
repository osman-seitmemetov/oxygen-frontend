import type {NextPage} from 'next'
import Home from "@/webpages/Home/Home";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Meta from "@/lib/Meta/Meta";

const HomePage: NextPage = () => {
    return (
        <Meta title="Главная" description="Интернет магазин на React/Next">
            <Header/>
            <div className="main">
                <Home/>
            </div>
            <Footer/>
        </Meta>
    )
}

export default HomePage;
