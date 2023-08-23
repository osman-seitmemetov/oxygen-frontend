import {FC, ReactNode} from "react";
import style from './FormAdditional.module.scss'

interface IFormAdditional {
    className?: string,
    children: ReactNode
}

const FormAdditional: FC<IFormAdditional> = ({ className, children }) => {
    return (
        <div className={`${style.formAdditional} ${className}`}>
            {children}
        </div>
    );
}

export default FormAdditional;