import React, {FC} from "react";
import style from './ProductsItems.module.scss';
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductsEmpty from "./ProductsEmpty/ProductsEmpty";
import Title from "@/components/Title/Title";
import ProductsItemsFilter from "./ProductsItemsFilter/ProductsItemsFilter";
import SkeletonLoader from "@/components/UI/SkeletonLoader/SkeletonLoader";
import {IProduct} from "@/models/IProduct";
import {sortOptions} from "@/lib/sortOptions";
import {Controller, useFormContext} from "react-hook-form";
import {IProductsFilterFields} from "@/webpages/Category/Category";
import {declensions} from "@/lib/declensions";


interface SearchItemsProps {
    products: IProduct[],
    isLoading: boolean
}

const ProductsItems: FC<SearchItemsProps> = ({products, isLoading}) => {
    const {control} = useFormContext<IProductsFilterFields>();

    return (
        <>
            <section className={style.catalogItems}>
                <div className={style.head}>
                    <Title className={style.title_mob}>Консервы</Title>
                    <div className={style.count}>{products && products.length} {declensions(products.length, ['товар', 'товара', 'товаров'])}</div>

                    <Controller
                        control={control}
                        name="sort"
                        rules={{
                            required: "Это поле обязательно"
                        }}
                        render={({field}) =>
                            <ProductsItemsFilter
                                field={field}
                                options={sortOptions}
                                // defaultValue={sortOptions[0]}
                            />
                        }
                    />
                </div>

                {
                    isLoading
                        ? <SkeletonLoader count={3}/>
                        : products
                            ? products.length > 0
                                ? <div className={style.items}>
                                    {
                                        products?.map(product =>
                                            <ProductCard
                                                className={style.item}
                                                key={product.id}
                                                product={product}
                                            />
                                        )
                                    }
                                </div>
                                : <ProductsEmpty/>
                            : <ProductsEmpty/>
                }
            </section>
        </>
    );
}

export default ProductsItems;