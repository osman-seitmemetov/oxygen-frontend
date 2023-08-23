import {FC} from "react";
import style from './NewsItem.module.scss';
import {NEWS_ROUTE} from "@/lib/consts";
import {IArticle} from "@/models/IArticle";
import Link from "next/link";
import Image from "next/image";
import {convertPostgresDateToNormalDate} from "@/lib/date/convertPostgresDateToNormalDate";

interface INewsItem {
    article: IArticle
}

const NewsItem: FC<INewsItem> = ({article}) => {
    return (
        <article className={style.item}>
            <Image
                src={`http://localhost:5000/${article.previewImg}`}
                alt={article.title}
                className={style.item__img}
                width={250}
                height={180}
            />

            <div className={style.item__right}>
                <Link href={`${NEWS_ROUTE}/${article.id}`}>
                    <h3 className={style.item__title}>
                        {article.title}
                    </h3>
                </Link>

                <div className={style.item__bottom}>
                    <div className={style.item__date}>
                        <span>Дата публикации:</span>
                        {convertPostgresDateToNormalDate(article.date)}
                    </div>

                    <Link href={`${NEWS_ROUTE}/1`}>
                        <a className={style.item__link}>Подробнее</a>
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default NewsItem;