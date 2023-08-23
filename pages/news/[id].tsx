import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Article from "@/webpages/Article/Article";

const ArticlePage: NextPage = () => {
    return (
        <>
            <Header type={headerTypes.withoutBottom}/>
            <div className="main">
                <Article/>
            </div>
            <Footer/>
        </>
    )
}

export default ArticlePage;