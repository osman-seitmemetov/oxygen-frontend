import React, {FC} from "react";
import style from './Products.module.scss';
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Title from "@/components/Title/Title";
import {IProduct} from "@/models/IProduct";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import ProductsFilter from "@/components/Products/ProductsFilter/ProductsFilter";
import ProductsItems from "@/components/Products/ProductsItems/ProductsItems";


interface ProductsProps {
    products: IProduct[],
    isProductsLoading: boolean,
    title: string,
    category: ICategoryFields
}

const Products: FC<ProductsProps> = (props) => {
    return (
        <>
            <PrimaryButton isFloating>Фильтры</PrimaryButton>
            <Title className={style.title}>{props.title}</Title>

            <div className={style.components}>
                <ProductsFilter category={props.category}/>
                <ProductsItems products={props.products} isLoading={props.isProductsLoading}/>
            </div>
        </>
    );
}

export default Products;