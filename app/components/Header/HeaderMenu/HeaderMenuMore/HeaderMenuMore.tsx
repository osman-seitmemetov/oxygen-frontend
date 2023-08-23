import { FC } from "react";
import style from "./HeaderMenuMore.module.scss";
import Link from "next/link";

interface HeaderMenuMoreProps {}

const HeaderMenuMore: FC<HeaderMenuMoreProps> = () => {
    return (
        <div className={`${style.item} ${ {/*style.item_active*/} } ${style.menuItem}`}>
            Ещё

            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29292C4.68342 7.9024 5.31658 7.9024 5.70711 8.29292L12 14.5858L18.2929 8.29292C18.6834 7.9024 19.3166 7.9024 19.7071 8.29292C20.0976 8.68345 20.0976 9.31661 19.7071 9.70714L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071L4.29289 9.70714C3.90237 9.31661 3.90237 8.68345 4.29289 8.29292Z" />
            </svg>

            <div className={style.dropdown}>
                <div className={style.dropdown__inner}>
                    <div className={style.dropdown__items}>
                        <Link href="" className={style.dropdown__item}>Разное</Link>
                        <Link href="" className={style.dropdown__item}>Сигареты</Link>
                        <Link href="" className={style.dropdown__item}>Канцтовары</Link>
                        <Link href="" className={style.dropdown__item}>Одежда</Link>
                        <Link href="" className={style.dropdown__item}>Комплект</Link>
                    </div>

                    <Link href="/categories" className={style.dropdown__link}>
                        Все категории
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderMenuMore;