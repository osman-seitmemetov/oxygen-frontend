import {FC, ReactNode} from "react";
import style from './FormLabel.module.scss'

interface IFormLabel {
    className?: string,
    children: ReactNode
}

const FormLabel: FC<IFormLabel> = ({ className, children }) => {
    return (
        <span className={style.label}>{children}</span>
    );
}

export default FormLabel;