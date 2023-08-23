import {FC} from "react";
import style from './FormWarning.module.scss'

interface IFormWarning {
    title: string
    text: string
}

const FormWarning: FC<IFormWarning> = ({ title, text }) => {
    return (
        <div className={style.warning}>
            <div className={style.title}>{title}</div>
            <div className={style.text}>{text}</div>
        </div>
    );
}

export default FormWarning;