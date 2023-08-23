import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Search from "@/webpages/Search/Search";
import FAQ from "@/webpages/FAQ/FAQ";
import Meta from "@/lib/Meta/Meta";

const SearchPage: NextPage = () => {
    return (
        <Meta title="Вопрос-ответ" description="">
            <Header />
            <div className="main">
                <FAQ />
            </div>
            <Footer/>
        </Meta>
    )
}

export default SearchPage;