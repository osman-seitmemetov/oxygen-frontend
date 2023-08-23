import React, {FC} from "react";
import CartIcon from "@/assets/img/cart-icon.svg";
import {categories} from "@/lib/categories";
import HeaderMenuCategory from "./HeaderMenuCategory/HeaderMenuCategory";
import style from "./HeaderMenu.module.scss";
import HeaderMenuMore from "./HeaderMenuMore/HeaderMenuMore";
import Link from "next/link";
import Image from "next/image";


interface HeaderMenuProps {
}

const HeaderMenu: FC<HeaderMenuProps> = () => {
    return (
        <div className={style.headerMenu}>
            <div className={style.categories}>
                {
                    categories.map(category =>
                        <HeaderMenuCategory key={category.id} category={category}/>
                    )
                }
                <HeaderMenuMore/>
            </div>

            <Link href="/cart">
                <div className={style.cart}>
                    <Image
                        className={style.cart__img}
                        src={CartIcon}
                        alt="cart-icon"
                        width={24}
                        height={24}
                    />

                    <div className={style.cart__price}>
                        <span>Корзина</span>
                        2 400 г.
                    </div>

                    <div className={style.cart__count}>
                        5
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default HeaderMenu;