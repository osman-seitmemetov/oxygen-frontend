import React, {ButtonHTMLAttributes, FC} from 'react';
import style from './ButtonReset.module.scss';

interface ButtonResetProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonReset: FC<ButtonResetProps> = ({ children, className }) => {
    return (
        <button className={`${style.button} ${className}`} type="reset">{children}</button>
    );
}

export default ButtonReset;