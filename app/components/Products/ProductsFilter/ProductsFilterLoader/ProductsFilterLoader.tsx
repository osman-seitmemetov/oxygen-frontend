import React, {FC} from "react";
import styles from "./ProductsFilterLoader.module.scss";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";

interface ProductsFilterLoaderProps {
}

const ProductsFilterLoader: FC<ProductsFilterLoaderProps> = () => {

    return (
        <div style={{width: 280, marginRight: 30}}>
            <div className={styles.loaderSection}>
                <SkeletonLoader style={{width: '70%', height: 20, marginBottom: 10}}/>
                <SkeletonLoader style={{width: '50%', height: 20, marginBottom: 5}}/>
                <SkeletonLoader style={{width: '100%', height: 20, marginBottom: 5}}/>
                <SkeletonLoader style={{width: '70%', height: 20, marginBottom: 5}}/>
            </div>

            <div className={styles.loaderSection}>
                <SkeletonLoader style={{width: '100%', height: 20, marginBottom: 10}}/>
                <SkeletonLoader style={{width: '60%', height: 20, marginBottom: 5}}/>
                <SkeletonLoader style={{width: '30%', height: 20, marginBottom: 5}}/>
            </div>

            <div className={styles.loaderSection}>
                <SkeletonLoader style={{width: '80%', height: 20, marginBottom: 10}}/>
                <SkeletonLoader style={{width: '100%', height: 20, marginBottom: 5}}/>
                <SkeletonLoader style={{width: '50%', height: 20, marginBottom: 5}}/>
                <SkeletonLoader style={{width: '80%', height: 20, marginBottom: 5}}/>
                <SkeletonLoader style={{width: '70%', height: 20, marginBottom: 5}}/>
            </div>

            <div className={styles.loaderSection}>
                <SkeletonLoader style={{width: '50%', height: 20, marginBottom: 10}}/>
                <SkeletonLoader style={{width: '40%', height: 20, marginBottom: 5}}/>
                <SkeletonLoader style={{width: '30%', height: 20, marginBottom: 5}}/>
                <SkeletonLoader style={{width: '60%', height: 20, marginBottom: 5}}/>
            </div>

            <div className={styles.loaderSection}>
                <SkeletonLoader style={{width: '60%', height: 20, marginBottom: 10}}/>
                <SkeletonLoader style={{width: '70%', height: 20, marginBottom: 5}}/>
            </div>
        </div>
    );
}

export default ProductsFilterLoader;