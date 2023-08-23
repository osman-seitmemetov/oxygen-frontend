import React, {ButtonHTMLAttributes, FC} from 'react';
import style from './ButtonGreen.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    isFloating?: boolean,
}

const ButtonGreen: FC<IButton> = ({className, isFloating, children, ...rest}) => {
    return (
        <button
            className={`${className} ${style.button} ${isFloating && style.floatingButton}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default ButtonGreen;