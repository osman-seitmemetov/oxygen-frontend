import React, {FC, forwardRef, InputHTMLAttributes} from 'react';
import styles from './Checkbox.module.scss';


interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    isSmall?: boolean,
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((
    {
        className,
        isSmall,
        style,
        children,
        ...rest
    }, ref
) => {
    return (
        <label style={style} className={`${styles.checkboxItem} ${className}`}>
            <input
                className={styles.checkboxItem__input}
                type="checkbox"
                ref={ref}
                {...rest}
            />
            <div className={styles.checkbox}></div>
            <div
                className={`${styles.checkboxItem__title} ${isSmall && styles.checkboxItem__title_form}`}
            >
                {children}
            </div>
        </label>
    );
})

Checkbox.displayName = 'Checkbox';

export default Checkbox;