import React, {forwardRef, InputHTMLAttributes} from 'react';
import styles from './Radio.module.scss';


interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Radio = forwardRef<HTMLInputElement, RadioProps>((
    {
        className,
        style,
        children,
        ...rest
    }, ref
) => {
    return (
        <label style={style} className={`${styles.radioItem} ${className}`}>
            <input
                className={styles.radioItem__input}
                type="radio"
                ref={ref}
                {...rest}
            />
            <div className={styles.radio}></div>
            <div
                className={styles.radioItem__title}
            >
                {children}
            </div>
        </label>
    );
})

Radio.displayName = 'Radio';

export default Radio;