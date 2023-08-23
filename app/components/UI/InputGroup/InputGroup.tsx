import React, {CSSProperties, FC, ReactNode} from 'react';
import styles from './InputGroup.module.scss';


interface InputGroupProps {
    title: string,
    disabled?: boolean,
    className?: string,
    name?: string,
    children?: ReactNode,
    style?: CSSProperties,
    autoMargin?: boolean
}

const InputGroup: FC<InputGroupProps> = ({title, disabled, className, children, name, style, autoMargin}) => {
    return (
        <div
            className={`${styles.input} ${className} ${disabled && styles.input_disabled} ${autoMargin && styles.autoMargin}`}
            style={style}
        >
            <label className={styles.input__title} htmlFor={name ? name : title}>{title}</label>
            {children}
        </div>
    );
}

export default InputGroup;