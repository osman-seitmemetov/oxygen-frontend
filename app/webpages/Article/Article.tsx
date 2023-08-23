import {FC} from "react";
import style from './Article.module.scss';
import Container from "@/components/Container/Container";
import Image from "next/image";
import {useRouter} from "next/router";
import {useArticle} from "./useArticle";
import {convertPostgresDateToNormalDate} from "@/lib/date/convertPostgresDateToNormalDate";
import parse from "html-react-parser";

const Article: FC = () => {
    const {query} = useRouter();
    const articleId = String(query.id);
    const {article, isLoading} = useArticle(articleId);
    console.log(article?.date)
    console.log(article?.bannerImg)
    return (
        <section className={style.article}>
            <Container>
                {
                    isLoading
                        ? <div>Loading...</div>
                        : article && <>
                        <div className={style.head}>
                            <h1 className={style.title}>{article.title}</h1>
                            <div className={style.date}>
                                Дата публикации:&nbsp;
                                {convertPostgresDateToNormalDate(article.date)}
                            </div>
                        </div>

                        <div className={style.imageWrapper}>
                            <img
                                src={`http://localhost:5000/${article.bannerImg}`}
                                alt="Изображение статьи"
                                className={style.img}
                                width={`100%`}
                                height={300}
                            />
                        </div>

                        <div className={style.text}>
                            {parse(article.text)}
                        </div>
                    </>
                }
            </Container>
        </section>
    );
}

export default Article;