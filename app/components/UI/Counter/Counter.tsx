import {ChangeEvent, CSSProperties, FC, forwardRef, InputHTMLAttributes, useState} from "react";
import styles from "./Counter.module.scss";
import {FieldError, UseFormSetValue} from "react-hook-form";
import {IProductFields} from "@/webpages/AdminProduct/AdminProduct";
import NumericInput from 'react-numeric-input';
import {CartService} from "@/services/CartService";
import {useDebounce} from "@/hooks/useDebounce";
import {useCounter} from "@/UI/Counter/useCounter";

interface CounterProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    error?: FieldError,
    productId: number,
    min: number,
    max: number,
    // changeCountHandler: (data: { id: string, count: number }) => void,
}

const Counter: FC<CounterProps> = (
    {
        className,
        style, min, max,
        value, productId, ...rest
    }
) => {
    const {onChange, onChangePlus, onChangeMinus, count} = useCounter(Number(value), productId, min, max)

    return (
        <div style={style} className={`${styles.counter} ${className && className}`}>
            <button
                type="button"
                className={styles.counter__minus}
                onClick={onChangeMinus}
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.99658 13H20.0001C20.5524 13 21.0001 12.5523 21.0001 12C21.0001 11.4477 20.5524 11 20.0001 11H3.99658C3.4443 11 2.99658 11.4477 2.99658 12C2.99658 12.5523 3.4443 13 3.99658 13Z"/>
                </svg>
            </button>

            <input
                className={styles.counter__input}
                value={count}
                min={min}
                max={max}
                onChange={onChange}
                {...rest}
            />

            <button
                type="button"
                className={styles.counter__plus}
                onClick={onChangePlus}
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.8834 3.00673L12 3C12.5128 3 12.9355 3.38604 12.9933 3.88338L13 4V11H20C20.5128 11 20.9355 11.386 20.9933 11.8834L21 12C21 12.5128 20.614 12.9355 20.1166 12.9933L20 13H13V20C13 20.5128 12.614 20.9355 12.1166 20.9933L12 21C11.4872 21 11.0645 20.614 11.0067 20.1166L11 20V13H4C3.48716 13 3.06449 12.614 3.00673 12.1166L3 12C3 11.4872 3.38604 11.0645 3.88338 11.0067L4 11H11V4C11 3.48716 11.386 3.06449 11.8834 3.00673L12 3L11.8834 3.00673Z"/>
                </svg>
            </button>
        </div>
    );
}

export default Counter;