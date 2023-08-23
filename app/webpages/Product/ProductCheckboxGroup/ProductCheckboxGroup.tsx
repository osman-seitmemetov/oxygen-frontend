import { FC } from "react";
import style from "./ProductCheckboxGroup.module.scss";


interface ProductCheckboxGroupProps {
    title: string
    properties: string[]
}

const ProductCheckboxGroup: FC<ProductCheckboxGroupProps> = ({}) => {
    return (
        <>
            <div className={`${style.property} ${style.property_extend}`}>
                Размер:

                <div className={style.items}>
                    <label className={style.item}>
                        <input className={style.item__input} name="size" type="radio" />
                        <div className={style.item__radio}>S</div>
                    </label>

                    <label className={style.item}>
                        <input className={style.item__input} name="size" type="radio" />
                        <div className={style.item__radio}>M</div>
                    </label>

                    <label className={style.item}>
                        <input className={style.item__input} name="size" type="radio" disabled />
                        <div className={style.item__radio}>L</div>
                    </label>
                </div>
            </div>

            <div className={`${style.property} ${style.property_extend}`}>
                Цвет:

                <div className={style.items}>
                    <label className={style.item}>
                        <input className={style.item__input} name="color" type="radio" />

                        <div className={style.item__radio}>
                            <div style={{ backgroundColor: '#303030' }}></div>
                        </div>
                    </label>

                    <label className={style.item}>
                        <input className={style.item__input} name="color" type="radio" />

                        <div className={style.item__radio}>
                            <div style={{ backgroundColor: '#ffffff' }}></div>
                        </div>
                    </label>

                    <label className={style.item}>
                        <input className={style.item__input} name="color" type="radio" />

                        <div className={style.item__radio}>
                            <div style={{ backgroundColor: '#F16161' }}></div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
}

export default ProductCheckboxGroup;