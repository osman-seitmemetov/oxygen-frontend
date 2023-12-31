import { FC } from "react";
import style from './ProductCardEnd.module.scss';
import ProductBgImg from "../../assets/img/product-bg.png";
import Link from "next/link";

const ProductCardEnd: FC = () => {
    return (
        <Link href="/categories?filter">
            <div
                className={style.card}
                style={{backgroundImage: `url('${ProductBgImg.src}')`}}
            >
                <svg className={style.card__icon} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 17.019L25 26.5C25 27.3284 25.6716 28 26.5 28C27.3284 28 28 27.3284 28 26.5L28 13.5C28 12.6716 27.3284 12 26.5 12L13.5 12C12.6716 12 12 12.6716 12 13.5C12 14.3284 12.6716 15 13.5 15L22.7773 15L12.4341 25.4444C11.8511 26.033 11.8557 26.9828 12.4444 27.5657C13.033 28.1486 13.9827 28.144 14.5657 27.5554L25 17.019Z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 40C8.95431 40 -3.91405e-07 31.0457 -8.74228e-07 20C-1.35705e-06 8.95431 8.9543 -3.91405e-07 20 -8.74228e-07C31.0457 -1.35705e-06 40 8.9543 40 20C40 31.0457 31.0457 40 20 40ZM3 20C3 29.3888 10.6112 37 20 37C29.3888 37 37 29.3888 37 20C37 10.6112 29.3888 3 20 3C10.6112 3 3 10.6112 3 20Z"/>
                </svg>

                <div className={style.card__title}>Смотреть все</div>
            </div>
        </Link>
    );
}

export default ProductCardEnd;