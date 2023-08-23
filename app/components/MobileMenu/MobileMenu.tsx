import { FC } from "react";
import style from "./MobileMenu.module.scss";
import NavLink from "@/components/NavLink/NavLink";
import {useCartLength} from "@/hooks/useCartLength";


const MobileMenu: FC = () => {
    // const {data, isLoading} = useCartLength();
    const cartLength = 4;

    return (
        <section className={style.mobileMenu}>
            <div className={style.mobileMenu__item}>
                <NavLink
                    exact
                    href="/"
                    className={style.mobileMenu__link}
                    activeClassName={style.mobileMenu__link_active}
                >
                    <div className={style.mobileMenu__linkIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5358 2.91088C11.8081 2.69637 12.1919 2.69637 12.4642 2.91088L19.5708 8.51003C20.4733 9.2211 21 10.3067 21 11.4556V20.75C21 21.4404 20.4404 22 19.75 22H14.75C14.0596 22 13.5 21.4404 13.5 20.75V15.75C13.5 15.6119 13.3881 15.5 13.25 15.5H10.75C10.6119 15.5 10.5 15.6119 10.5 15.75V20.75C10.5 21.4404 9.94036 22 9.25 22H4.25C3.55964 22 3 21.4404 3 20.75V11.4556C3 10.3067 3.52672 9.2211 4.42923 8.51003L11.5358 2.91088ZM12 4.45482L5.35754 9.68827C4.81603 10.1149 4.5 10.7662 4.5 11.4556V20.5H9V15.75C9 14.7835 9.7835 14 10.75 14H13.25C14.2165 14 15 14.7835 15 15.75V20.5H19.5V11.4556C19.5 10.7662 19.184 10.1149 18.6425 9.68827L12 4.45482Z" />
                        </svg>

                        <div className={style.mobileMenu__linkNotify}>1</div>
                    </div>

                    <div className={style.mobileMenu__linkLabel}>Главная</div>
                </NavLink>
            </div>

            <div className={style.mobileMenu__item}>
                <NavLink
                    exact
                    href="/cart"
                    className={`${style.mobileMenu__link} ${cartLength && cartLength > 0 && style.mobileMenu__link_notify}`}
                    activeClassName={style.mobileMenu__link_active}
                >

                    <div className={style.mobileMenu__linkIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 4H5H4H2V6H4H4.3L7.582 15.025C8.011 16.206 9.145 17 10.401 17H19V15H10.401C9.982 15 9.604 14.735 9.461 14.342L8.973 13H18.246C19.136 13 19.926 12.402 20.169 11.549L21.962 5.275C22.048 4.973 21.987 4.649 21.799 4.398C21.609 4.147 21.313 4 21 4ZM18.246 11H8.246L6.428 6H19.675L18.246 11Z" />
                            <path d="M10.5 21C11.3284 21 12 20.3284 12 19.5C12 18.6716 11.3284 18 10.5 18C9.67157 18 9 18.6716 9 19.5C9 20.3284 9.67157 21 10.5 21Z" />
                            <path d="M16.5 21C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18C15.6716 18 15 18.6716 15 19.5C15 20.3284 15.6716 21 16.5 21Z" />
                        </svg>

                        <div className={style.mobileMenu__linkNotify}>{cartLength}</div>
                    </div>

                    <div className={style.mobileMenu__linkLabel}>Корзина</div>
                </NavLink>
            </div>

            <div className={style.mobileMenu__item}>
                <NavLink
                    exact
                    href="/catalog"
                    className={style.mobileMenu__link}
                    activeClassName={style.mobileMenu__link_active}
                >
                    <div className={style.mobileMenu__linkIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 17H21C21.5523 17 22 17.4477 22 18C22 18.5128 21.614 18.9355 21.1166 18.9933L21 19H3C2.44772 19 2 18.5523 2 18C2 17.4872 2.38604 17.0645 2.88338 17.0067L3 17ZM2.99988 11L20.9999 10.9978C21.5522 10.9978 22 11.4454 22 11.9977C22 12.5106 21.6141 12.9333 21.1167 12.9911L21.0001 12.9978L3.00012 13C2.44784 13.0001 2 12.5524 2 12.0001C2 11.4873 2.38594 11.0646 2.88326 11.0067L2.99988 11ZM3 5H21C21.5523 5 22 5.44772 22 6C22 6.51284 21.614 6.93551 21.1166 6.99327L21 7H3C2.44772 7 2 6.55228 2 6C2 5.48716 2.38604 5.06449 2.88338 5.00673L3 5Z" />
                        </svg>

                        <div className={style.mobileMenu__linkNotify}>1</div>
                    </div>

                    <div className={style.mobileMenu__linkLabel}>Каталог</div>
                </NavLink>
            </div>

            <div className={style.mobileMenu__item}>
                <div data-hystmodal="#account-menu-relative" className={style.mobileMenu__link}>
                    <div className={style.mobileMenu__linkIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.75 13C9.99264 13 11 14.0074 11 15.25V18.75C11 19.9926 9.99264 21 8.75 21H5.25C4.00736 21 3 19.9926 3 18.75V15.25C3 14.0074 4.00736 13 5.25 13H8.75ZM18.75 13C19.9926 13 21 14.0074 21 15.25V18.75C21 19.9926 19.9926 21 18.75 21H15.25C14.0074 21 13 19.9926 13 18.75V15.25C13 14.0074 14.0074 13 15.25 13H18.75ZM8.75 14.5H5.25C4.83579 14.5 4.5 14.8358 4.5 15.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H8.75C9.16421 19.5 9.5 19.1642 9.5 18.75V15.25C9.5 14.8358 9.16421 14.5 8.75 14.5ZM18.75 14.5H15.25C14.8358 14.5 14.5 14.8358 14.5 15.25V18.75C14.5 19.1642 14.8358 19.5 15.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V15.25C19.5 14.8358 19.1642 14.5 18.75 14.5ZM8.75 3C9.99264 3 11 4.00736 11 5.25V8.75C11 9.99264 9.99264 11 8.75 11H5.25C4.00736 11 3 9.99264 3 8.75V5.25C3 4.00736 4.00736 3 5.25 3H8.75ZM18.75 3C19.9926 3 21 4.00736 21 5.25V8.75C21 9.99264 19.9926 11 18.75 11H15.25C14.0074 11 13 9.99264 13 8.75V5.25C13 4.00736 14.0074 3 15.25 3H18.75ZM8.75 4.5H5.25C4.83579 4.5 4.5 4.83579 4.5 5.25V8.75C4.5 9.16421 4.83579 9.5 5.25 9.5H8.75C9.16421 9.5 9.5 9.16421 9.5 8.75V5.25C9.5 4.83579 9.16421 4.5 8.75 4.5ZM18.75 4.5H15.25C14.8358 4.5 14.5 4.83579 14.5 5.25V8.75C14.5 9.16421 14.8358 9.5 15.25 9.5H18.75C19.1642 9.5 19.5 9.16421 19.5 8.75V5.25C19.5 4.83579 19.1642 4.5 18.75 4.5Z" />
                        </svg>

                        <div className={style.mobileMenu__linkNotify}>1</div>
                    </div>

                    <div className={style.mobileMenu__linkLabel}>Меню</div>
                </div>
            </div>
        </section>
    );
}

export default MobileMenu;