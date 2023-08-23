import type {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductContainer from "@/webpages/Product/ProductContainer";
import {ProductService} from "@/services/ProductService";
import {IProduct} from "@/models/IProduct";

const OrdersPage: NextPage<{ product: IProduct }> = ({product}) => {
    return (
        <>
            <Header/>
            <div className="main">
                <ProductContainer product={product}/>
            </div>
            <Footer/>
        </>
    )
}

export default OrdersPage;


export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const {data: products} = await ProductService.getAll();
        const paths = products.map((product) => ({
            params: {id: product.id.toString()},
        }))

        return {paths, fallback: false}
    } catch {
        return {
            paths: [],
            fallback: false,
        }
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {data: product} = await ProductService.getById(String(params?.id));

    return {
        props: {product},
        revalidate: 5
    }
}