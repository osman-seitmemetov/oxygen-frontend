import { FC } from "react";
import style from './Footer.module.scss';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop';
import Container from "../Container/Container";


const Footer: FC = () => {

    // const wrongURL = '/login' || '/registration';
    //
    // if (location.pathname === '/login' || location.pathname === '/registration') {
    //     return null;
    // }

    return (
        <footer className={style.footer}>
            <Container>
                <FooterTop />
                <FooterBottom />
            </Container>
        </footer>
    );
}

export default Footer;