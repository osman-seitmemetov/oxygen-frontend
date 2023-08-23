import {FC} from "react";
import style from './News.module.scss';
import NewsItem from "./NewsItem/NewsItem";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import {useAppSelector} from "@/hooks/redux";
import {useRouter} from "next/router";
import {useArticle} from "@/webpages/AdminArticle/useArticle";
import {useArticles} from "@/webpages/AdminArticles/useArticles";


const News: FC = () => {
    const {query} = useRouter();
    const {articles, isLoading} = useArticles();

    return (
        <section className={style.news}>
            <Container>
                <Title className={style.news__title}>Новости</Title>

                <div className={style.news__items}>
                    {Array.isArray(articles?.data) && articles?.data.map(article => <NewsItem key={article.id} article={article}/>)}
                </div>
            </Container>
        </section>
    );
}

export default News;