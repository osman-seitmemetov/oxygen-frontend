import {FC, ReactNode} from "react";
import style from "./AccountEmpty.module.scss";


interface AccountEmptyProps {
    img?: string
    title: string
    children?: ReactNode
    // style:
}

const AccountEmpty: FC<AccountEmptyProps> = ({ children, title }) => {
    return (
        <div className={style.accountEmpty}>
            <div className={style.img}>{children}</div>
            <div className={style.title}>{title}</div>
        </div>
    );
}

export default AccountEmpty;