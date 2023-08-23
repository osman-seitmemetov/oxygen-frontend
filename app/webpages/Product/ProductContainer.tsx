import {FC} from "react";
import Product from "@/webpages/Product/Product";
import {IProduct} from "@/models/IProduct";
import {products} from "@/lib/productsMock";


const ProductContainer: FC<{product: IProduct}> = ({product}) => {
    return <Product product={product} productsForSlider={products} />;
}

export default ProductContainer;