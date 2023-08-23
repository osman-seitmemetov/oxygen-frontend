import { FC } from "react";
import style from "./FooterTop.module.scss";
import Link from "next/link";

const FooterTop: FC = () => {
    return (
        <div className={style.top}>
            <div className={style.nav}>
                <Link href="/about" className={style.nav__item}>О компании</Link>
                <Link href="/faq" className={style.nav__item}>Вопрос-Ответ</Link>
                <Link href="/news" className={style.nav__item}>Новости</Link>
                <Link href="/contacts" className={style.nav__item}>Контакты</Link>
            </div>

            <div className={style.phone}>
                <div className={style.phone__title}>Бесплатно по СНГ</div>
                <div className={style.phone__number}>8 800 080 50 11</div>
                <div className={style.phone__number}>8 727 225 50 11</div>
            </div>
        </div>
    );
}

export default FooterTop;