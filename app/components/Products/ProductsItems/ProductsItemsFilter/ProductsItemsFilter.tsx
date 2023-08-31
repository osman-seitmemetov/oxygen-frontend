import React, {FC} from "react";
import Select, {OnChangeValue, Options} from "react-select";
import {IOption} from "@/models/IOption";
import {ControllerRenderProps} from "react-hook-form";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import makeAnimated from "react-select/animated";


interface SearchItemsFilterProps {
    disabled?: boolean,
    options: Options<IOption>,
    field: ControllerRenderProps<any, any>,
    isLoading?: boolean,
    defaultValue?: IOption
}

const animatedComponents = makeAnimated();

const ProductsItemsFilter: FC<SearchItemsFilterProps> = (
    {
        disabled,
        field,
        options,
        isLoading,
        defaultValue,
        ...rest
    }
) => {
    const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
        field.onChange((newValue as IOption).value);
    }

    const getValue = () => {
        if (field.value) {
            return options.find(option => option.value === field.value);
        } else return "";
    }

    return (
        <>
            {
                isLoading
                    ? <>
                        <div style={{height: '7px'}}></div>
                        <SkeletonLoader
                            style={{
                                width: '100%',
                                height: '50px',
                                borderRadius: '10px',
                                marginTop: '10px'
                            }}
                        />
                    </>
                    : <Select
                        defaultValue={defaultValue}
                        onChange={onChange}
                        value={getValue()}
                        options={options}
                        isSearchable={false}
                        isMulti={false}
                        classNamePrefix="select-filter"
                        components={animatedComponents}
                        isLoading={isLoading}
                        isDisabled={disabled}
                        {...rest}
                    />
            }
        </>
    )
}

export default ProductsItemsFilter;