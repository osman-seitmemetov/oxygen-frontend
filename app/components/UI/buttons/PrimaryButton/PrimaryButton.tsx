import React, {ButtonHTMLAttributes, FC} from 'react';
import style from './PrimaryButton.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    isFloating?: boolean,
}

const PrimaryButton: FC<IButton> = ({className, isFloating, children, ...rest}) => {
    return (
        <button
            className={`${className} ${style.button} ${isFloating && style.floatingButton}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default PrimaryButton;