import React, {FC, forwardRef, InputHTMLAttributes} from 'react';
import styles from './InputTel.module.scss';
import MaskedInput from "react-maskedinput";

interface InputTelProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: any,
    mask: string,
    disabled?: boolean
}

const InputTel = forwardRef<HTMLInputElement, InputTelProps>((
    {error, className, ...rest}, ref
) => {
    return (
        <>
            <MaskedInput
                className={`${styles.input} ${error && styles.input_error} ${className}`}
                inputMode="tel"
                type="tel"
                // ref={ref}
                {...rest}
            />
            {error && <div className={styles.errorLog}>{error}</div>}
        </>
    );
});

InputTel.displayName = "InputTel"

export default InputTel;