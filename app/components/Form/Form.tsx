import {FC, FormHTMLAttributes, ReactNode} from "react";
import style from './Form.module.scss'

interface IForm extends FormHTMLAttributes<HTMLFormElement>{}

const Form: FC<IForm> = ({ className, children, ...rest }) => {
    return (
        <form {...rest} className={`${style.form} ${className}`}>
            {children}
        </form>
    );
}

export default Form;