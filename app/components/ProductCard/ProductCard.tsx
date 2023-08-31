import {FC, useState} from "react";
import style from './ProductCard.module.scss';
import {PRODUCT_ROUTE} from "@/lib/consts";
import Link from "next/link";
import {IProduct} from "@/models/IProduct";

interface ProductCardProps {
    product: IProduct
    className?: string
}

const ProductCard: FC<ProductCardProps> = ({product, className}) => {
    return (
        <>
            <div className={`${style.productCard} ${className}`}>
                <div>
                    <Link href={`/product/${product.id}`}>
                        <img src={`http://localhost:5000/${product.img}`} alt="Товар" className={style.img}/>
                    </Link>

                    <Link href={`/product/${product.id}`}>
                        <h3 className={style.title}>{product.name}</h3>
                    </Link>

                    <div className={style.available}>В наличии: {product.count} шт.</div>

                    <div className={style.weight}>Вес: 130гр</div>
                </div>

                <div className={style.bottom}>
                    <div className={style.price}>
                        {
                            product.isDiscount
                                ? <>
                                    <span className={style.priceOld}>{product.price} руб.</span>
                                    <span className={style.priceNew}>{product.newPrice} руб.</span>
                                </>
                                : <>{product.price} руб.</>
                        }
                    </div>

                    <button
                        // onClick={addHandler}
                        className={style.button}
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;