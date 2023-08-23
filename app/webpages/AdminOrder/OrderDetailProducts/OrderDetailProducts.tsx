import {FC} from "react";
import style from './OrderDetailProducts.module.scss';
import ProductImg from "@/assets/img/product.png";
import Image from "next/image";
import {IProduct} from "@/models/IProduct";


interface HistoryDetailProducts {
    products: IProduct[] | undefined
}

const HistoryDetailProducts: FC<HistoryDetailProducts> = ({products}) => {
    return (
        <div className={style.historyDetailsProducts}>
            <div className={style.title}>Товары которые вы заказали:</div>

            <div className={style.items}>
                {
                    products && products.length > 0
                        ? <div className={style.item}>
                            <div className={style.item__left}>
                                <Image
                                    src={ProductImg}
                                    alt="product"
                                    className={style.item__img}
                                    width={100}
                                    height={72}
                                />

                                <h3 className={style.item__title}>
                                    Конина тушеная Улан, есть возможность в 2 строки
                                </h3>
                            </div>

                            <div className={style.item__price}>24 320 тг.</div>
                        </div>
                        : <div>Нет товаров</div>
                }
            </div>
        </div>
    );
}

export default HistoryDetailProducts;