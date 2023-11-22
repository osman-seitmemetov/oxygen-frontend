import {FC} from "react";
import style from './BannerSlide.module.scss';
import {IBanner} from "@/models/IBanner";
import Link from "next/link";
import parse from "html-react-parser";

interface BannerSlideProps {
    slide: IBanner
}

const BannerSlide: FC<BannerSlideProps> = ({slide}) => {
    return (
        <div className={style.slide}>
            <div
                className={style.slide__usp}
                style={{
                    backgroundColor: slide.color || "#48cb7b",
                }}
            >
                <div className={style.slide__uspInner}>
                    <h2 className={style.slide__title}>{slide.title}</h2>
                    {/*Здесь выдает ошибку*/}
                    <p className={style.slide__text}>{parse(slide.text)}</p>
                </div>

                {
                    slide.link && slide.link !== "" && <Link href={slide.link}>
                        <div className={style.slide__link}>Подробнее</div>
                    </Link>
                }
            </div>

            <div className={style.slide__img} style={{backgroundImage: `url(http://localhost:5000/${slide.img})`}}/>
        </div>
    );
}

export default BannerSlide;