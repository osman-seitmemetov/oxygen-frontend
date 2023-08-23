import { FC } from "react";
import style from "./ProductsEmpty.module.scss";
import PictureSearchEmpty from "../../../../components/pictures/PictureSearchEmpty";
import Link from "next/link";

const ProductsEmpty: FC = () => {
    return (
        <>
            <div className={style.empty}>
                <PictureSearchEmpty className={style.img} />
                <div className={style.title}>Нам жаль, но по вашему запросу ничего не нашлось</div>
                <div className={style.text}>
                    Скорректируйте ваш запрос или
                    <Link href="/categories">перейдите в каталог</Link>
                </div>
            </div>
        </>
    );
}

export default ProductsEmpty;