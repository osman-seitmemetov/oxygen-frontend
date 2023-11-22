import {FC, ReactNode} from "react";
import style from './Account.module.scss';
import AccountSidebar from "./AccountSidebar/AccountSidebar";
import Container from "../Container/Container";
import Title from "@/components/Title/Title";


interface AccountProps {
    title: string,
    isRenderDesktopTitle?: boolean,
    children?: ReactNode
}

const Account: FC<AccountProps> = ({children, title, isRenderDesktopTitle}) => {
    return (
        <section className={style.account}>
            <Container>
                <AccountSidebar/>

                <div className={style.right}>
                    <Title className={style.title}>{title}</Title>
                    {children}
                </div>
            </Container>
        </section>
    );
}

export default Account;