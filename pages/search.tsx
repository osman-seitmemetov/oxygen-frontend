import type {NextPage} from 'next'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Meta from "@/lib/Meta/Meta";
import Search from "@/webpages/Search/Search";

const SearchPage: NextPage = () => {
    return (
        <Meta title="Category term" description="">
            <Header />
            <div className="main">
                <Search />
            </div>
            <Footer/>
        </Meta>
    )
}

export default SearchPage;