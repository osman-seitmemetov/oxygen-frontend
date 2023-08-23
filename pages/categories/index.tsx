import type {NextPage} from 'next'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Meta from "@/lib/Meta/Meta";
import Catalog from "@/webpages/Catalog/Catalog";

const CatalogPage: NextPage = () => {
    return (
        <Meta title="Каталог" description="">
            <Header />
            <div className="main">
                <Catalog />
            </div>
            <Footer/>
        </Meta>
    )
}

export default CatalogPage;