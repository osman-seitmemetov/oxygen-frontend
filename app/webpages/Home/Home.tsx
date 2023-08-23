import {FC} from "react";
import Banner from './Banner/Banner';
import Propositions from './Propositions/Propositions';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import {products} from "@/lib/productsMock";

const Home: FC = () => {
    return (
        <>
            <Banner />
            <Propositions />
            <ProductSlider title="Акции" products={products}/>
            <ProductSlider title="Новинки" products={products}/>
            <ProductSlider title="Популярные товары" products={products}/>
        </>
    );
}

export default Home;