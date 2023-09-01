import React, {FC} from "react";
import style from "./Breadcrumbs.module.scss";
import Link from "next/link";
import Container from "@/components/Container/Container";


interface BreadcrumbsProps {

}

const Breadcrumbs: FC<BreadcrumbsProps> = ({}) => {
    return (
        <section className={style.breadcrumbs}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Container className={style.breadcrumbs__container}>
                <Link href="/" className={style.breadcrumbs__item}>Главная</Link>
                <span className={style.breadcrumbs__separator}> / </span>
                <Link href="#" className={style.breadcrumbs__item}>Еда</Link>
                <span className={style.breadcrumbs__separator}> / </span>
                <span className={style.breadcrumbs__item}>Консервы</span>
            </Container>
        </section>
    );
}

export default Breadcrumbs;