import React, {FC} from "react";
import style from './Footer.module.scss';
import Container from "../Container/Container";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";


const Footer: FC = () => {

    return (
        <footer className={style.footer}>
            <Container>
                <Logo isDark/>

                <div className={style.nav}>
                    <Link href="/about" className={style.nav__item}>О компании</Link>
                    <Link href="/faq" className={style.nav__item}>Вопрос-Ответ</Link>
                    <Link href="/news" className={style.nav__item}>Новости</Link>
                    <Link href="/contacts" className={style.nav__item}>Контакты</Link>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;