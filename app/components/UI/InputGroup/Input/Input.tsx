import React, {FC, forwardRef, InputHTMLAttributes} from 'react';
import style from './Input.module.scss';
import {FieldError} from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError,
}

const Input = forwardRef<HTMLInputElement, InputProps>((
    {
        error, className,
        inputMode = "text",
        type = "text", ...rest
    }, ref
) => {
    return (
        <>
            <input
                className={`${style.input} ${error && style.input_error} ${className}`}
                ref={ref}
                {...rest}
            />
            {error && <div className={style.errorLog}>{error.message}</div>}
        </>
    )
})

Input.displayName = 'Input'

export default Input;