import React, {FC} from "react";
import style from './ProductCard.module.scss';
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
                <div className={style.top}>
                    <button className={style.wishlist}>
                        <div className={style.wishlist__icons}>
                            <svg className={style.wishlist__fill} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z"
                                />
                            </svg>

                            <svg className={style.wishlist__outline} width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 21.6501C11.69 21.6501 11.39 21.6101 11.14 21.5201C7.32 20.2101 1.25 15.5601 1.25 8.6901C1.25 5.1901 4.08 2.3501 7.56 2.3501C9.25 2.3501 10.83 3.0101 12 4.1901C13.17 3.0101 14.75 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.2001 22.75 8.6901C22.75 15.5701 16.68 20.2101 12.86 21.5201C12.61 21.6101 12.31 21.6501 12 21.6501ZM7.56 3.8501C4.91 3.8501 2.75 6.0201 2.75 8.6901C2.75 15.5201 9.32 19.3201 11.63 20.1101C11.81 20.1701 12.2 20.1701 12.38 20.1101C14.68 19.3201 21.26 15.5301 21.26 8.6901C21.26 6.0201 19.1 3.8501 16.45 3.8501C14.93 3.8501 13.52 4.5601 12.61 5.7901C12.33 6.1701 11.69 6.1701 11.41 5.7901C10.48 4.5501 9.08 3.8501 7.56 3.8501Z"
                                />
                            </svg>
                        </div>
                    </button>

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