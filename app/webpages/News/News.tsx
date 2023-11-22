import {FC} from "react";
import style from './News.module.scss';
import NewsItem from "./NewsItem/NewsItem";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import {useArticles} from "@/webpages/News/useArticles";


const News: FC = () => {
    const {data, isLoading} = useArticles();

    const articles = data?.data;

    return (
        <section className={style.news}>
            <Container>
                <Title className={style.news__title}>Новости</Title>

                <div className={style.news__items}>
                    {
                        isLoading
                            ? <div>Loading...</div>
                            : Array.isArray(articles) && articles.map(article =>
                            <NewsItem
                                key={article.id}
                                article={article}
                            />
                        )
                    }
                </div>
            </Container>
        </section>
    );
}

export default News;