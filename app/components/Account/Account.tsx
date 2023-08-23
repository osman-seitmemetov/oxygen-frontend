import {FC, ReactNode} from "react";
import style from './Account.module.scss';
import AccountSidebar from "./AccountSidebar/AccountSidebar";
import Container from "../Container/Container";
import {IUser} from "@/models/IUser";


interface AccountProps {
    title: string,
    isRenderDesktopTitle?: boolean,
    children?: ReactNode
}

const Account: FC<AccountProps> = ({ children, title, isRenderDesktopTitle }) => {
    return (
        <section className={style.account}>
            <Container>
                <AccountSidebar />

                <div className={style.right}>
                    {isRenderDesktopTitle && <h1 className={style.title}>{title}</h1>}
                    <h1 className={style.title_mob}>{title}</h1>
                    {children}
                </div>
            </Container>
        </section>
    );
}

export default Account;