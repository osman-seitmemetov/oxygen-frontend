import React, {FC} from 'react';
import Select, {OnChangeValue, Options} from "react-select";
import {IOption} from "@/models/IOption";
import styles from "@/components/UI/InputGroup/Input/Input.module.scss";
import makeAnimated from "react-select/animated";
import {ControllerRenderProps, FieldError} from "react-hook-form";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";

interface CustomSelectProps {
    placeholder: string,
    // value: string | IOption | undefined,
    error?: FieldError,
    disabled?: boolean,
    options: Options<IOption>,
    isMulti?: boolean,
    field: ControllerRenderProps<any, any>,
    isLoading?: boolean,
    isSearchable?: boolean
}

const animatedComponents = makeAnimated();

const CustomSelect: FC<CustomSelectProps> = (
    {
        error,
        disabled,
        field,
        options,
        isMulti = false,
        isLoading,
        isSearchable = false,
        ...rest
    }
) => {
    const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
        field.onChange(isMulti ? (newValue as IOption[]).map(item => item.value) : (newValue as IOption).value);
    }

    const getValue = () => {
        if (field.value) {
            return isMulti
                ? options.filter(option => field.value.indexOf(option.value) >= 0)
                : options.find(option => option.value === field.value)
        } else return isMulti ? [] : ''
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
                    : <>
                        {/*<Select*/}
                        {/*    classNamePrefix="select"*/}
                        {/*    options={options}*/}
                        {/*    value={getValue()}*/}
                        {/*    onChange={onChange}*/}
                        {/*    isMulti={isMulti}*/}
                        {/*    components={animatedComponents}*/}
                        {/*    isLoading={isLoading}*/}
                        {/*    isSearchable={isSearchable}*/}
                        {/*    isDisabled={disabled}*/}
                        {/*    {...rest}*/}
                        {/*/>*/}

                        <div>

                        </div>
                        {error && <div className={styles.errorLog}>{error.message}</div>}
                    </>
            }
        </>
    );
}

export default CustomSelect;