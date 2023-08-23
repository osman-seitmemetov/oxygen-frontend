import {FC, ReactNode} from "react";
import style from './FormLink.module.scss'
import Link from "next/link";

interface IForm {
    className?: string
    link: string,
    children: ReactNode
}

const FormLink: FC<IForm> = ({ className, link, children }) => {
    return (
        <Link href={link}>
            <div className={`${style.formLink} ${className}`}>{children}</div>
        </Link>
    );
}

export default FormLink;