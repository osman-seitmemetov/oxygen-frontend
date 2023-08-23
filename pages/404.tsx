import {FC} from "react";
import PicturePageNotFound from "@/components/pictures/PicturePageNotFound";
import Container from "@/components/Container/Container";
import style from "@/assets/scss/Error404.module.scss";
import Header from "@/components/Header/Header";
import {HOME_ROUTE} from "@/lib/consts";
import Link from "next/link";
import Meta from "@/lib/Meta/Meta";

const Error404: FC = () => {
    return (
        <Meta title='Страница не найдена'>
            <Header/>
            <section className={style.notFound}>
                <Container>
                    <div className={style.left}>
                        <h1 className={style.title}>Упс, что-то пошло не так</h1>
                        <div className={style.text}>Мы не можем найти страницу, которую вы ищете</div>
                        <Link href={HOME_ROUTE} className={style.link}>Вернуться на главную</Link>
                    </div>

                    <PicturePageNotFound className={style.img}/>
                </Container>
            </section>
        </Meta>
    );
}

export default Error404;