import {FC, ReactNode} from "react";
import style from './Auth.module.scss';
import Title from "../../components/Title/Title";
import Container from "../Container/Container";

interface IAuth {
    title: string,
    isScrollable?: boolean,
    children: ReactNode
}

const Auth: FC<IAuth> = ({ isScrollable, children, title }) => {
    return (
        <section className={`${style.login} ${isScrollable && style.login_scrollable}`}>
            <Container className={style.container}>
                <Title>{title}</Title>
                {children}
            </Container>
        </section>
    );
}

export default Auth;