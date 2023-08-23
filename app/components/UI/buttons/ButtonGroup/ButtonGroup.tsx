import React, {CSSProperties, FC, ReactNode} from 'react';
import style from './ButtonGroup.module.scss';

interface ButtonGroupProps {
    className?: string,
    style?: CSSProperties,
    children?: ReactNode
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children, className, ...rest }) => {
    return (
        <div className={`${style.buttonGroup} ${className}`} {...rest}>{children}</div>
    );
}

export default ButtonGroup;