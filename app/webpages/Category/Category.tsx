import React, {FC} from "react";
import style from './Category.module.scss';
import Container from "@/components/Container/Container";
import {useProductsForCategories} from "@/webpages/Category/useProductsForCategories";
import Products from "@/components/Products/Products";
import {ICategory} from "@/models/ICategory";


export interface ICategoryChildren {
    parent1Lvl?: ICategory,
    parent2Lvl?: ICategory,
    childCategory2Lvls?: ICategory[],
    childCategory3Lvls: ICategory[],
}

const Category: FC = () => {
    const {
        category,
        isCategoryLoading,
        isProductsLoading,
        products
    } = useProductsForCategories();

    console.log("__", products);

    return (
        <section className={style.catalog}>
            <Container className={style.container}>
                {
                    isCategoryLoading
                        ? <div>Loading...</div>
                        : category?.data && <>
                        <div>{category?.data.name}</div>
                        <Products
                            products={products?.data ? products?.data : []}
                            isProductsLoading={isProductsLoading}
                            title={category?.data ? category?.data.name : ""}
                            category={category?.data}
                        />
                    </>
                }
            </Container>
        </section>
    );
}

export default Category;