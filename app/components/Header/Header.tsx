import React, {FC, useEffect, useState} from "react";
import style from './Header.module.scss';
import Container from "../Container/Container";
import Link from "next/link";
import HeaderSearch from "@/components/Header/HeaderSearch/HeaderSearch";
import {useAuth} from "@/hooks/useAuth";
import {useTheme} from "next-themes";
import HeaderCatalog from "@/components/Header/HeaderCatalog/HeaderCatalog";
import Logo from "@/components/Logo/Logo";


export enum headerTypes {
    withoutBottom = "withoutBottom",
    auth = "auth"
}

interface HeaderProps {
    type?: headerTypes
}

const Header: FC<HeaderProps> = ({type}) => {
    let isRenderMenu = true;
    if (type === headerTypes.withoutBottom) isRenderMenu = false;
    if (type === headerTypes.auth) isRenderMenu = false;
    let isRender = false;
    if (type === headerTypes.auth) isRender = true;

    const {user, isLoading} = useAuth();

    const {theme, setTheme} = useTheme();

    const handleLightTheme = () => {
        setTheme('light');
    }

    const handleDarkTheme = () => {
        setTheme('dark');
    }

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, [domLoaded]);

    return (
        <>
            <header className={style.header}>
                <Container className={style.container}>
                    <div className={style.top}>
                        <div className={style.left}>
                            <Logo />
                            <HeaderCatalog/>
                            <HeaderSearch searchTerm="" placeholder="Искать на Oxygen" handleSearch={() => {
                            }}/>
                        </div>

                        {/*{!isRender*/}
                        {/*    && <div className={style.right}>*/}
                        {/*        /!*<HeaderTopLocation/>*!/*/}

                        {/*        <Link href="/">*/}
                        {/*            <div className={style.logoMobile}>*/}
                        {/*                <svg width="85" height="35" viewBox="0 0 85 35" fill="none"*/}
                        {/*                     xmlns="http://www.w3.org/2000/svg">*/}
                        {/*                    <path d="M75.5124 17.0355L75.3331 16.3613L74.7168 16.9123L75.5124 17.0355Z"*/}
                        {/*                          fill="#00622B"/>*/}
                        {/*                    <path*/}
                        {/*                        d="M67.5529 9.14898L69.4149 12.8878L71.3758 14.5441L75.2192 15.9425L73.6094 9.9304L79.9236 9.73598L80.1178 16.6229L84.9996 14.9367L84.8708 8.50216L77.4024 8.62928L73.5926 9.86123L73.5328 9.64438L72.2853 7.44967L70.7614 7.4721L70.9033 6.73742L71.4935 6.03825L69.5867 6.47944L68.9723 4.93342L67.8611 4.39315L68.1804 3.52387L68.9368 4.33333L69.4261 2.58168L71.6597 2.01898L72.2087 3.11073L74.3079 0.895456L74.3284 0L72.6551 0.0112166L71.204 1.23569L70.2067 0.106557L67.8499 0.508484L66.8078 3.55939L67.9993 6.0476L65.7881 8.85174L67.5529 9.14898Z"*/}
                        {/*                        fill="#00622B"/>*/}
                        {/*                    <path d="M76.7808 17.2313L75.5127 17.0352L75.7424 17.8924L76.7808 17.2313Z"*/}
                        {/*                          fill="#00622B"/>*/}
                        {/*                    <path d="M75.6343 16.0928L75.2197 15.9434L75.3337 16.3617L75.6343 16.0928Z"*/}
                        {/*                          fill="#00622B"/>*/}
                        {/*                    <path*/}
                        {/*                        d="M69.7066 17.6924L72.4725 22.2538L73.6864 18.3205L71.7983 17.8662L68.5506 15.8043L65.7549 11.3887L67.5963 16.023L69.7066 17.6924Z"*/}
                        {/*                        fill="#00622B"/>*/}
                        {/*                    <path*/}
                        {/*                        d="M77.7243 32.1682L75.3264 32.0728L73.5223 33.0431L73.5186 34.0862L76.8204 33.1758L78.8131 32.9571L80.8991 31.1026L79.8309 30.166L77.7243 32.1682Z"*/}
                        {/*                        fill="#00622B"/>*/}
                        {/*                    <path d="M75.6755 23.7588L77.8773 19.9414H73.4736L75.6755 23.7588Z"*/}
                        {/*                          fill="#00622B"/>*/}
                        {/*                    <path*/}
                        {/*                        d="M70.7622 28.4741L73.0929 33.0149L76.4414 31.2932L73.3917 25.3522L73.3637 25.3653L70.4074 19.8691L66.1027 19.9009L68.7658 25.2419L63.249 29.7341L63.6823 30.265L64.7449 32.2447L64.6964 33.5832L68.7658 33.5982L69.285 32.1288L67.0981 32.6373L67.1429 31.4203L70.7622 28.4741Z"*/}
                        {/*                        fill="#00622B"/>*/}
                        {/*                    <path*/}
                        {/*                        d="M10.3834 27.9936C10.2238 28.3136 10.0242 28.612 9.78952 28.8816C9.54099 29.1832 9.22638 29.4234 8.87011 29.5835C8.51384 29.7437 8.12549 29.8195 7.7352 29.8051C6.48394 29.8051 5.81349 29.1116 5.56884 28.5619C5.39469 28.1714 5.31166 27.7462 5.32606 27.3188C5.32606 25.9522 5.96476 24.7259 6.13284 24.3894C7.15439 22.52 8.46729 22.2414 9.25913 22.2414C9.3357 22.2414 10.6467 22.2414 11.151 23.1107C11.2843 23.3809 11.3521 23.6787 11.3489 23.98C11.351 24.1687 11.3303 24.357 11.2873 24.5408H15.3399C15.3852 24.3066 15.4108 24.069 15.4165 23.8304C15.4111 23.4697 15.3545 23.1115 15.2484 22.7667C15.0272 22.087 14.6265 21.4798 14.0886 21.0095C12.3667 19.4822 9.80446 19.5345 9.31703 19.5345C8.37484 19.5184 7.43612 19.6528 6.53623 19.9327C4.91493 20.4756 3.54794 21.5933 2.6928 23.0752C1.9019 24.3756 1.48027 25.8674 1.47329 27.3898C1.45004 28.178 1.584 28.9628 1.86734 29.6986C2.05888 30.1639 2.33283 30.5907 2.67599 30.9586C3.96461 32.3419 5.99277 32.7158 7.65677 32.7158C10.417 32.7158 11.9876 31.74 12.9177 30.8165C13.8165 29.9095 14.4357 28.7628 14.7012 27.5132H10.5664C10.518 27.6779 10.4568 27.8385 10.3834 27.9936Z"*/}
                        {/*                        fill="#00622B"/>*/}
                        {/*                    <path*/}
                        {/*                        d="M26.4985 20.3064C25.1408 19.5418 23.4637 19.5418 23.0678 19.5418C21.8304 19.5236 20.608 19.8144 19.5111 20.3879C18.4142 20.9613 17.4773 21.7994 16.7853 22.8264C15.8852 24.1051 15.2296 25.8175 15.2296 27.4775C15.2094 28.4739 15.4626 29.4568 15.9617 30.3191C17.4091 32.7493 20.231 32.7157 20.8174 32.7157C24.4479 32.7157 26.3696 30.7808 27.3146 29.4143C27.7105 28.8534 28.8385 27.0345 28.8385 24.7089C28.8609 22.7199 28.0224 21.1589 26.4985 20.3064ZM24.0912 27.7262C23.1443 29.5732 21.9248 29.8218 21.1479 29.8218C20.8299 29.8384 20.5127 29.7777 20.2232 29.6449C19.9338 29.5121 19.6808 29.3111 19.4858 29.0591C19.2274 28.6728 19.0968 28.2151 19.1123 27.7505C19.1123 26.6849 19.6296 25.2641 20.1189 24.3855C20.7595 23.2639 21.7045 22.3796 22.9202 22.3796C23.4077 22.3628 24.9746 22.5666 24.9746 24.5818C24.9727 25.9334 24.1958 27.5131 24.0912 27.7262Z"*/}
                        {/*                        fill="#00622B"/>*/}
                        {/*                    <path*/}
                        {/*                        d="M51.0463 19.8613L46.1216 28.242L46.0132 19.8613H42.2669H42.2333H38.7447L36.6867 27.4961L35.3439 19.8613H31.4407L27.6738 32.3958H31.2259L33.1626 24.9929L34.5819 32.3958H38.5001L42.237 19.9604L42.8421 32.3958H47.4625L55.605 19.8613H51.0463Z"*/}
                        {/*                        fill="#00622B"/>*/}
                        {/*                    <path*/}
                        {/*                        d="M62.1749 27.4063L62.9219 24.7611H58.3483L58.9272 22.7739H64.0817L64.9501 19.8613H55.9074L52.2021 32.3958H61.4746L62.3131 29.5375H56.9458L57.5695 27.4063H62.1749Z"*/}
                        {/*                        fill="#00622B"/>*/}
                        {/*                </svg>*/}
                        {/*            </div>*/}
                        {/*        </Link>*/}

                                {/*{*/}
                                {/*    domLoaded && theme === 'light'*/}
                                {/*    && <button className={style.dark} onClick={handleDarkTheme}>*/}
                                {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920">*/}
                                {/*            <path className={style.st0}*/}
                                {/*                  d="M1294.4 1447.1c132.3 0 255.2-40.3 357.1-109.2-129.3 218.6-367.5 365.2-640 365.2-410.4 0-743-332.7-743-743.1s332.7-743 743-743c14.2 0 28.3.4 42.2 1.2-233 95-397.3 323.8-397.3 591 .1 352.2 285.7 637.9 638 637.9z"*/}
                                {/*                  id="Layer_5"/>*/}
                                {/*            <path className={style.st1}*/}
                                {/*                  d="M1294.4 1447.1c-352.3 0-637.9-285.6-637.9-637.9 0-267.2 164.2-496 397.3-591-14-.8-28.1-1.2-42.2-1.2-410.4 0-743 332.7-743 743s332.7 743.1 743 743.1c272.4 0 510.6-146.6 640-365.2-102 68.9-224.9 109.2-357.2 109.2z"*/}
                                {/*                  id="STROKES"/>*/}
                                {/*        </svg>*/}
                                {/*    </button>*/}
                                {/*}*/}

                                {/*{*/}
                                {/*    domLoaded && theme === 'dark'*/}
                                {/*    && <div className={style.light} onClick={handleLightTheme}>*/}
                                {/*        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"*/}
                                {/*             width="24px"*/}
                                {/*             height="24px"*/}
                                {/*             viewBox="0 0 612 612"*/}
                                {/*        >*/}
                                {/*            <g>*/}
                                {/*                <g id="_x37__5_">*/}
                                {/*                    <g>*/}
                                {/*                        <path d="M76.5,286.875H19.125C8.568,286.875,0,295.443,0,306c0,10.557,8.568,19.125,19.125,19.125H76.5*/}
                                {/*            c10.557,0,19.125-8.568,19.125-19.125C95.625,295.443,87.057,286.875,76.5,286.875z M306,95.625*/}
                                {/*            c10.557,0,19.125-8.568,19.125-19.125V19.125C325.125,8.568,316.557,0,306,0c-10.557,0-19.125,8.568-19.125,19.125V76.5*/}
                                {/*            C286.875,87.057,295.443,95.625,306,95.625z M490.002,148.792l40.182-40.182c7.401-7.401,7.401-19.393,0-26.794*/}
                                {/*            s-19.394-7.401-26.795,0l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794C470.609,156.194,482.601,156.194,490.002,148.792z*/}
                                {/*            M141.716,443.509l-40.182,40.182c-7.401,7.401-7.401,19.393,0,26.794s19.393,7.401,26.794,0l40.182-40.182*/}
                                {/*            c7.401-7.401,7.401-19.393,0-26.794S149.118,436.107,141.716,443.509z M130.203,157.246c7.478,7.478,19.584,7.478,27.042,0*/}
                                {/*            c7.459-7.478,7.459-19.584,0-27.042L116.682,89.62c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.043*/}
                                {/*            L130.203,157.246z M306,516.375c-10.557,0-19.125,8.568-19.125,19.125v57.375c0,10.557,8.568,19.125,19.125,19.125*/}
                                {/*            c10.557,0,19.125-8.568,19.125-19.125V535.5C325.125,524.943,316.557,516.375,306,516.375z M481.797,454.754*/}
                                {/*            c-7.478-7.478-19.584-7.478-27.043,0c-7.478,7.479-7.478,19.584,0,27.043l40.564,40.564c7.478,7.478,19.584,7.478,27.043,0*/}
                                {/*            c7.459-7.479,7.478-19.584,0-27.043L481.797,454.754z M592.875,286.875H535.5c-10.557,0-19.125,8.568-19.125,19.125*/}
                                {/*            c0,10.557,8.568,19.125,19.125,19.125h57.375c10.557,0,19.125-8.568,19.125-19.125C612,295.443,603.432,286.875,592.875,286.875z*/}
                                {/*            M306,133.76c-95.128,0-172.24,77.112-172.24,172.24S210.872,478.24,306,478.24S478.24,401.128,478.24,306*/}
                                {/*            S401.128,133.76,306,133.76z M306,439.837c-73.918,0-133.837-59.919-133.837-133.837S232.082,172.163,306,172.163*/}
                                {/*            S439.837,232.082,439.837,306S379.918,439.837,306,439.837z"/>*/}
                                {/*                    </g>*/}
                                {/*                </g>*/}
                                {/*            </g>*/}
                                {/*        </svg>*/}
                                {/*    </div>*/}
                                {/*}*/}


                                {/*{*/}
                                {/*    isLoading*/}
                                {/*        ? <div>loading...</div>*/}
                                {/*        : domLoaded && user*/}
                                {/*            ? <>*/}
                                {/*                <Link href="/profile">*/}
                                {/*                    <div className={style.loginMobile}>*/}
                                {/*                        <span>{user?.email}</span>*/}
                                {/*                        <img src={UserIcon} alt=""/>*/}
                                {/*                    </div>*/}
                                {/*                </Link>*/}
                                {/*                <HeaderTopAuth user={user}/>*/}
                                {/*            </>*/}
                                {/*            : <>*/}
                                {/*                <Link href="/login">*/}
                                {/*                    <div className={style.loginMobile}>*/}
                                {/*                        <span>Войти</span>*/}
                                {/*                        <img src={UserIcon} alt=""/>*/}
                                {/*                    </div>*/}
                                {/*                </Link>*/}
                                {/*                <Link href="/login" className={style.login}>Войти</Link>*/}
                                {/*            </>*/}
                                {/*}*/}


                                {
                                    domLoaded && <div className={style.links}>
                                        <Link href="/profile" className={style.link}>
                                            <svg className={style.link__icon} width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.12 13.53C12.1 13.53 12.07 13.53 12.05 13.53C12.02 13.53 11.98 13.53 11.95 13.53C9.67998 13.46 7.97998 11.69 7.97998 9.50998C7.97998 7.28998 9.78998 5.47998 12.01 5.47998C14.23 5.47998 16.04 7.28998 16.04 9.50998C16.03 11.7 14.32 13.46 12.15 13.53C12.13 13.53 12.13 13.53 12.12 13.53ZM12 6.96998C10.6 6.96998 9.46998 8.10998 9.46998 9.49998C9.46998 10.87 10.54 11.98 11.9 12.03C11.93 12.02 12.03 12.02 12.13 12.03C13.47 11.96 14.52 10.86 14.53 9.49998C14.53 8.10998 13.4 6.96998 12 6.96998Z"
                                                />
                                                <path
                                                    d="M11.9998 22.7498C9.30984 22.7498 6.73984 21.7498 4.74984 19.9298C4.56984 19.7698 4.48984 19.5298 4.50984 19.2998C4.63984 18.1098 5.37984 16.9998 6.60984 16.1798C9.58984 14.1998 14.4198 14.1998 17.3898 16.1798C18.6198 17.0098 19.3598 18.1098 19.4898 19.2998C19.5198 19.5398 19.4298 19.7698 19.2498 19.9298C17.2598 21.7498 14.6898 22.7498 11.9998 22.7498ZM6.07984 19.0998C7.73984 20.4898 9.82984 21.2498 11.9998 21.2498C14.1698 21.2498 16.2598 20.4898 17.9198 19.0998C17.7398 18.4898 17.2598 17.8998 16.5498 17.4198C14.0898 15.7798 9.91984 15.7798 7.43984 17.4198C6.72984 17.8998 6.25984 18.4898 6.07984 19.0998Z"
                                                />
                                                <path
                                                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                                />
                                            </svg>

                                            <span className={style.link__title}>{user?.firstname}</span>
                                        </Link>

                                        <Link href="/orders" className={style.link}>
                                            <svg className={style.link__icon} width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.0008 13.2999C11.8708 13.2999 11.7408 13.2699 11.6208 13.1999L2.79083 8.0899C2.43083 7.8799 2.31081 7.41987 2.52081 7.05987C2.73081 6.69987 3.18081 6.57985 3.55081 6.78985L12.0008 11.6799L20.4008 6.81988C20.7608 6.60988 21.2208 6.7399 21.4308 7.0899C21.6408 7.4499 21.5108 7.90987 21.1608 8.11987L12.3908 13.1999C12.2608 13.2599 12.1308 13.2999 12.0008 13.2999Z"
                                                />
                                                <path
                                                    d="M12.001 22.36C11.591 22.36 11.251 22.02 11.251 21.61V12.54C11.251 12.13 11.591 11.79 12.001 11.79C12.411 11.79 12.751 12.13 12.751 12.54V21.61C12.751 22.02 12.411 22.36 12.001 22.36Z"
                                                />
                                                <path
                                                    d="M12.0011 22.75C11.1211 22.75 10.2511 22.56 9.5611 22.18L4.2211 19.21C2.7711 18.41 1.64111 16.48 1.64111 14.82V9.16998C1.64111 7.50998 2.7711 5.59002 4.2211 4.78002L9.5611 1.82C10.9311 1.06 13.0711 1.06 14.4411 1.82L19.7811 4.78997C21.2311 5.58997 22.3611 7.51999 22.3611 9.17999V14.83C22.3611 16.49 21.2311 18.41 19.7811 19.22L14.4411 22.18C13.7511 22.56 12.8811 22.75 12.0011 22.75ZM12.0011 2.74999C11.3711 2.74999 10.7511 2.88 10.2911 3.13L4.95111 6.09997C3.99111 6.63997 3.14111 8.06999 3.14111 9.17999V14.83C3.14111 15.93 3.99111 17.37 4.95111 17.91L10.2911 20.88C11.2011 21.39 12.8011 21.39 13.7111 20.88L19.0511 17.91C20.0111 17.37 20.8611 15.94 20.8611 14.83V9.17999C20.8611 8.07999 20.0111 6.63997 19.0511 6.09997L13.7111 3.13C13.2511 2.88 12.6311 2.74999 12.0011 2.74999Z"
                                                />
                                                <path
                                                    d="M17.0012 13.99C16.5912 13.99 16.2512 13.65 16.2512 13.24V10.0201L7.13116 4.76007C6.77116 4.55007 6.65114 4.09005 6.86114 3.74005C7.07114 3.38005 7.52116 3.26003 7.88116 3.47003L17.3712 8.95007C17.6012 9.08007 17.7512 9.33003 17.7512 9.60003V13.2601C17.7512 13.6501 17.4112 13.99 17.0012 13.99Z"
                                                />
                                            </svg>

                                            <span className={style.link__title}>Заказы</span>
                                        </Link>

                                        <Link href="/" className={style.link}>
                                            <svg className={style.link__icon} width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 21.6501C11.69 21.6501 11.39 21.6101 11.14 21.5201C7.32 20.2101 1.25 15.5601 1.25 8.6901C1.25 5.1901 4.08 2.3501 7.56 2.3501C9.25 2.3501 10.83 3.0101 12 4.1901C13.17 3.0101 14.75 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.2001 22.75 8.6901C22.75 15.5701 16.68 20.2101 12.86 21.5201C12.61 21.6101 12.31 21.6501 12 21.6501ZM7.56 3.8501C4.91 3.8501 2.75 6.0201 2.75 8.6901C2.75 15.5201 9.32 19.3201 11.63 20.1101C11.81 20.1701 12.2 20.1701 12.38 20.1101C14.68 19.3201 21.26 15.5301 21.26 8.6901C21.26 6.0201 19.1 3.8501 16.45 3.8501C14.93 3.8501 13.52 4.5601 12.61 5.7901C12.33 6.1701 11.69 6.1701 11.41 5.7901C10.48 4.5501 9.08 3.8501 7.56 3.8501Z"
                                                />
                                            </svg>

                                            <span className={style.link__title}>Избранное</span>
                                        </Link>

                                        <Link href="/cart" className={style.link}>
                                            <svg className={style.link__icon} width="24" height="24" viewBox="0 0 24 24"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5.18988 6.37994C4.99988 6.37994 4.79988 6.29994 4.65988 6.15994C4.36988 5.86994 4.36988 5.38994 4.65988 5.09994L8.28988 1.46994C8.57988 1.17994 9.05988 1.17994 9.34988 1.46994C9.63988 1.75994 9.63988 2.23994 9.34988 2.52994L5.71988 6.15994C5.56988 6.29994 5.37988 6.37994 5.18988 6.37994Z"
                                                />
                                                <path
                                                    d="M18.8101 6.37994C18.6201 6.37994 18.4301 6.30994 18.2801 6.15994L14.6501 2.52994C14.3601 2.23994 14.3601 1.75994 14.6501 1.46994C14.9401 1.17994 15.4201 1.17994 15.7101 1.46994L19.3401 5.09994C19.6301 5.38994 19.6301 5.86994 19.3401 6.15994C19.2001 6.29994 19.0001 6.37994 18.8101 6.37994Z"
                                                />
                                                <path
                                                    d="M20.21 10.6001C20.14 10.6001 20.07 10.6001 20 10.6001H19.77H4C3.3 10.6101 2.5 10.6101 1.92 10.0301C1.46 9.5801 1.25 8.8801 1.25 7.8501C1.25 5.1001 3.26 5.1001 4.22 5.1001H19.78C20.74 5.1001 22.75 5.1001 22.75 7.8501C22.75 8.8901 22.54 9.5801 22.08 10.0301C21.56 10.5501 20.86 10.6001 20.21 10.6001ZM4.22 9.1001H20.01C20.46 9.1101 20.88 9.1101 21.02 8.9701C21.09 8.9001 21.24 8.6601 21.24 7.8501C21.24 6.7201 20.96 6.6001 19.77 6.6001H4.22C3.03 6.6001 2.75 6.7201 2.75 7.8501C2.75 8.6601 2.91 8.9001 2.97 8.9701C3.11 9.1001 3.54 9.1001 3.98 9.1001H4.22Z"
                                                />
                                                <path
                                                    d="M9.75977 18.3C9.34977 18.3 9.00977 17.96 9.00977 17.55V14C9.00977 13.59 9.34977 13.25 9.75977 13.25C10.1698 13.25 10.5098 13.59 10.5098 14V17.55C10.5098 17.97 10.1698 18.3 9.75977 18.3Z"
                                                />
                                                <path
                                                    d="M14.3599 18.3C13.9499 18.3 13.6099 17.96 13.6099 17.55V14C13.6099 13.59 13.9499 13.25 14.3599 13.25C14.7699 13.25 15.1099 13.59 15.1099 14V17.55C15.1099 17.97 14.7699 18.3 14.3599 18.3Z"
                                                />
                                                <path
                                                    d="M14.8902 22.7502H8.86024C5.28024 22.7502 4.48024 20.6202 4.17024 18.7702L2.76024 10.1202C2.69024 9.71024 2.97024 9.33024 3.38024 9.26024C3.79024 9.19024 4.17024 9.47024 4.24024 9.88024L5.65024 18.5202C5.94024 20.2902 6.54024 21.2502 8.86024 21.2502H14.8902C17.4602 21.2502 17.7502 20.3502 18.0802 18.6102L19.7602 9.86024C19.8402 9.45024 20.2302 9.18024 20.6402 9.27024C21.0502 9.35024 21.3102 9.74024 21.2302 10.1502L19.5502 18.9002C19.1602 20.9302 18.5102 22.7502 14.8902 22.7502Z"
                                                />
                                            </svg>

                                            <span className={style.link__title}>Корзина</span>
                                        </Link>
                                    </div>
                                }
                            {/*</div>*/}
                        {/*}*/}

                        {/*<Link href="/cart">*/}
                        {/*    <div className={style.cart}>*/}
                        {/*        <Image*/}
                        {/*            className={style.cart__img}*/}
                        {/*            src={CartIcon}*/}
                        {/*            alt="cart-icon"*/}
                        {/*            width={24}*/}
                        {/*            height={24}*/}
                        {/*        />*/}

                        {/*        <div className={style.cart__price}>*/}
                        {/*            <span>Корзина</span>*/}
                        {/*            2 400 г.*/}
                        {/*        </div>*/}

                        {/*        <div className={style.cart__count}>*/}
                        {/*            5*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Link>*/}

                        {/*{isRender && <Link href="/"><a className={style.back}>Назад на главную</a></Link>}*/}
                    </div>
                </Container>
            </header>
            {/*<div className={`${style.search_bg} ${style.searchBg_active}`}></div>*/}
        </>
    );
}

export default Header;