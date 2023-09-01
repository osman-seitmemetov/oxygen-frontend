import React, {FC} from "react";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import style from "./ProductsLoader.module.scss";
import ProductsFilterLoader from "@/components/Products/ProductsFilter/ProductsFilterLoader/ProductsFilterLoader";
import ProductsItemsLoader from "@/components/Products/ProductsItems/ProductsItemsLoader/ProductsItemsLoader";

interface ProductsFilterLoaderProps {
}

const ProductsLoader: FC<ProductsFilterLoaderProps> = () => {

    return (
        <>
            <SkeletonLoader style={{width: '60%', height: 30, marginBottom: 20}}/>

            <div className={style.components}>
                <ProductsFilterLoader/>
                <ProductsItemsLoader/>
            </div>
        </>
    );
}

export default ProductsLoader;