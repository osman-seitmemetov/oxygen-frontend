import {FC} from "react";
import style from "./CartInfo.module.scss";

interface CartInfoProps {
    count: number,
    sum: number
}

const CartInfo: FC<CartInfoProps> = ({count}) => {
    return (
        <div className={style.info}>
            {/*это форма для создания заказа*/}
            {/*Переделать форму оплаты и все шаги*/}
            <form action="cart/order" className={`${style.form} ${style.result}`}>
                <button type="submit" className={style.form__submit} >
                    Оформить заказ
                </button>

                <button data-hystmodal="#cart-modal" type="button" className={style.form__promocode}>
                    Использовать промокод
                </button>

                <div className={style.form__data}>
                    Количество единиц:
                    <span>{count}</span>
                </div>

                <div className={style.form__data}>
                    Тип заказа:
                    <span>бандероль</span>
                </div>

                <div className={style.form__data}>
                    Сумма заказа:
                    <span>34 000 тг.</span>
                </div>

                <div className={style.form__data}>
                    Промокод:
                    <span style={{ color: '#EE4029' }}>-3 000 тг.</span>
                </div>

                <div className={style.form__data}>
                    Cтоимость доставки:
                    <span>1 500 тг.</span>
                </div>

                <div className={style.form__result}>
                    Итого:
                    <div className={style.form__sum}>32 500 тг.</div>
                </div>
            </form>

            <div className={style.info__label}>Минимальная сумма заказа: 4 000 тг.</div>
        </div>
    );
}

export default CartInfo;