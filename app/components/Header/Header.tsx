import {FC} from "react";
import style from './Header.module.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderTop from './HeaderTop/HeaderTop';
import Container from "../Container/Container";
import {useRouter} from "next/router";
import {useCartLength} from "@/hooks/useCartLength";


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

    // const {data, isLoading} = useCartLength();
    // const cartLength = data?.data.count;

    return (
        <>
            <header className={style.header}>
                <Container className={style.container}>
                    <HeaderTop type={type}/>
                    {isRenderMenu && <HeaderMenu/>}
                </Container>
            </header>
            {/*<div className={`${style.search_bg} ${style.searchBg_active}`}></div>*/}
        </>
    );
}

export default Header;