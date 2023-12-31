import React, {FC, useEffect} from "react";
import style from './Category.module.scss';
import Container from "@/components/Container/Container";
import {useProductsForCategories} from "@/webpages/Category/useProductsForCategories";
import Products from "@/components/Products/Products";
import {FormProvider, useForm} from "react-hook-form";
import ProductsLoader from "@/components/Products/ProductsFilter/ProductsLoader/ProductsLoader";
import {IValue} from "@/models/IValue";


export interface IProductsFilterFields {
    typeIds: number[],
    brandIds: number[],
    sort: string,
    priceMin: number,
    priceMax: number,
    parameters: {
        parameterId: number,
        title: string,
        type: string,
        format: string,
        valueIds: number[],
        valueId: number,
        value: IValue,
    }[]
}

const Category: FC = () => {
    const productsFilterForm = useForm<IProductsFilterFields>({mode: "onChange"});

    useEffect(() => {
        productsFilterForm.setValue("sort", "increase");
    }, []);

    const typeIds = productsFilterForm.watch("typeIds");
    const brandIds = productsFilterForm.watch("brandIds");
    const sort = productsFilterForm.watch("sort");
    const priceMin = productsFilterForm.watch("priceMin");
    const priceMax = productsFilterForm.watch("priceMax");
    const parameters = productsFilterForm.watch("parameters");

    const productsFilterFormValues: IProductsFilterFields = {typeIds, brandIds, sort, priceMin, priceMax, parameters}
    console.log("productsFilterFormValues", productsFilterFormValues);

    const {
        category,
        isCategoryLoading,
        isProductsLoading,
        products,
        setProductsFilterFormValues
    } = useProductsForCategories();

    useEffect(() => {
        setProductsFilterFormValues(productsFilterFormValues)
    }, [typeIds, brandIds, sort, priceMin, priceMax, parameters]);

    return (
        <section className={style.catalog}>
            <Container className={style.container}>
                {
                    isCategoryLoading
                        ? <ProductsLoader/>
                        : category?.data && <>
                        <div style={{marginBottom: 5}}>Главная / Каталог / {category?.data.name}</div>
                        <FormProvider {...productsFilterForm}>
                            <Products
                                products={products?.data ? products?.data : []}
                                isProductsLoading={isProductsLoading}
                                title={category?.data ? category?.data.name : ""}
                                category={category?.data}
                            />
                        </FormProvider>
                    </>
                }
            </Container>
        </section>
    );
}

export default Category;