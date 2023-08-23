import React, { FC } from "react";
import style from "./Breadcrumbs.module.scss";
import {Link} from "react-router-dom";
import Container from "../Container/Container";


interface BreadcrumbsProps {

}

const Breadcrumbs: FC<BreadcrumbsProps> = ({}) => {
    return (
        <section className={style.breadcrumbs}>
            <Container className={style.breadcrumbs__container}>
                <Link to="/" className={style.breadcrumbs__item}>Главная</Link>
                <span className={style.breadcrumbs__separator}> / </span>
                <Link to="#" className={style.breadcrumbs__item}>Еда</Link>
                <span className={style.breadcrumbs__separator}> / </span>
                <span className={style.breadcrumbs__item}>Консервы</span>
            </Container>
        </section>
    );
}

export default Breadcrumbs;