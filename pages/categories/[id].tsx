import type {NextPage} from 'next'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Category from "@/webpages/Category/Category";

const CategoryPage: NextPage = () => {
    return (
        <>
            <Header/>
            <div className="main">
                <Category />
            </div>
            <Footer/>
        </>
    )
}

export default CategoryPage;