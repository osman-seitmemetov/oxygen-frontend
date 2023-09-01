import React, {FC} from "react";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import style from "./ProductsItemsLoader.module.scss";

const ProductsItemsLoader: FC = () => {
    return (
        <div className={style.loader}>
            <div className={style.items}>
                <SkeletonLoader height={386}/>
                <SkeletonLoader height={386}/>
                <SkeletonLoader height={386}/>
                <SkeletonLoader height={386}/>
                <SkeletonLoader height={386}/>
                <SkeletonLoader height={386}/>
            </div>
        </div>
    );
}

export default ProductsItemsLoader;