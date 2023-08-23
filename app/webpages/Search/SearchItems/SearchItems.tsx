import {FC} from "react";
import React, {useState} from 'react';
import style from './SearchItems.module.scss';
import ProductCard from "@/components/ProductCard/ProductCard";
import SearchEmpty from "./SearchEmpty/SearchEmpty";
import Title from "@/components/Title/Title";
import Select, {SingleValue} from "react-select";
import {IOption} from "@/models/IOption";
import SearchItemsFilter from "./SearchItemsFilter/SearchItemsFilter";
import SkeletonLoader from "@/components/UI/SkeletonLoader/SkeletonLoader";
import {IProduct} from "@/models/IProduct";


interface SearchItemsProps {
    products: IProduct[],
    isLoading: boolean
}

const filterOptions: IOption[] = [
    {
        value: "increase",
        label: "По увеличению цены"
    },
    {
        value: "decrease",
        label: "По уменьшению цены"
    },
    {
        value: "alphabet",
        label: "от А до Я"
    },
    {
        value: "alphabetReverse",
        label: "от Я до А"
    }
]

const SearchItems: FC<SearchItemsProps> = ({products, isLoading}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlerOpen = () => {
        setIsOpen(!isOpen);
    }

    const [currentOption, setCurrentOption] = useState<string | null>("increase");

    const getValue = () => {
        return currentOption
            ? filterOptions.find(c => c.value === currentOption)
            : null
    }

    const onChange = (newValue: SingleValue<IOption>/*OnChangeValue<string, boolean>*/) => {
        if (newValue) setCurrentOption(newValue.value);
    }

    return (
        <section className={style.catalogItems}>
            <div className={style.head}>
                <Title className={style.title_mob}>Консервы</Title>
                <div className={style.count}>{products && products.length} товаров</div>

                <SearchItemsFilter/>
            </div>

            {
                isLoading
                    ? <SkeletonLoader count={3} className={style.loaders__item}/>
                    : products
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
                        : <SearchEmpty/>
            }
        </section>
    );
}

export default SearchItems;