import { FC } from "react";
import React, { useState } from 'react';
import Select, {SingleValue} from "react-select";
import {IOption} from "@/models/IOption";
import style from "../ProductsItems.module.scss";


interface SearchItemsFilterProps {}

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

const ProductsItemsFilter: FC<SearchItemsFilterProps> = () => {
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
        if(newValue) setCurrentOption(newValue.value);
    }

    return (
        <>
            {/*<Select*/}
            {/*    onChange={onChange}*/}
            {/*    value={getValue()}*/}
            {/*    options={filterOptions}*/}
            {/*    // placeholder=*/}
            {/*    isSearchable={false}*/}
            {/*    classNamePrefix="select-filter"*/}
            {/*/>*/}
        </>
    )
}

export default ProductsItemsFilter;