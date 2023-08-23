import React, {FC} from "react";
import style from './Products.module.scss';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import Title from "@/components/Title/Title";
import ProductsItems from "@/components/Products/ProductsItems/ProductsItems";
import {IProduct} from "@/models/IProduct";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";


interface ProductsProps {
    products: IProduct[],
    isProductsLoading: boolean,
    title: string,
    // childCategories: ICategoryChildren
    category: ICategoryFields
}

const Products: FC<ProductsProps> = (props) => {
    return (
        <>
            <ButtonGreen isFloating>Фильтры</ButtonGreen>
            <Title className={style.title}>{props.title}</Title>

            <div className={style.components}>
                <ProductsFilter category={props.category}/>
                <ProductsItems products={props.products} isLoading={props.isProductsLoading}/>
            </div>
        </>
    );
}

export default Products;