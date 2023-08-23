import {FC} from "react";
import style from './FormSeparator.module.scss'

interface IFormSeparator {}

const FormSeparator: FC<IFormSeparator> = () => {
    return (
        <span className={style.separator}>или</span>
    );
}

export default FormSeparator;