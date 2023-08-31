import React, {FC, useEffect, useState} from 'react';
import styles from "@/components/UI/InputGroup/Input/Input.module.scss";
import {ControllerRenderProps, FieldError} from "react-hook-form";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import Checkbox from "@/components/Checkbox/Checkbox";


export interface IScrollAreaOption {
    id: number,
    title?: string,
    value: string
}

interface MultipleScrollAreaProps {
    groupName: string
    error?: FieldError,
    disabled?: boolean,
    options: IScrollAreaOption[],
    isMulti?: boolean,
    field: ControllerRenderProps<any, any>,
    isLoading?: boolean,
}

const MultipleScrollArea: FC<MultipleScrollAreaProps> = (
    {
        error,
        field,
        options,
        isMulti = false,
        isLoading,
        groupName,
    }
) => {
    const [singleValue, setSingleValue] = useState<number>();
    const [multipleValue, setMultipleValue] = useState<number[]>([]);

    useEffect(() => {
        if (field.value) {
            isMulti
                ? setMultipleValue(options.filter(option => field.value.indexOf(option.id) >= 0).map(option => option.id))
                : setSingleValue(options.find(option => option.id === field.value)?.id)
        } else isMulti ? setMultipleValue([]) : setSingleValue(undefined);
    }, [field.value, isMulti, options]);

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
                        <div>
                            {
                                isMulti
                                    ? options.map(option => <Checkbox
                                        key={option.id}
                                        onChange={
                                            (event) => {
                                                const checked = event.target.checked;
                                                checked ? field.onChange([...multipleValue, option.id]) : field.onChange(multipleValue.filter(id => id !== option.id));
                                            }
                                        }
                                    >
                                        {option.value}
                                    </Checkbox>)
                                    : options.map(option => <div key={option.id}>
                                        <input
                                            type="radio"
                                            name={groupName}
                                            onChange={
                                                (event) => {
                                                    const checked = event.target.checked;
                                                    checked ? field.onChange(option.id) : field.onChange(undefined);
                                                }
                                            }
                                        />
                                        {option.value}
                                    </div>)
                            }
                        </div>

                        {error &&
                            <div className={styles.errorLog}>{error.message}</div>
                        }
                    </>
            }
        </>
    );
}

export default MultipleScrollArea;