import { FC } from "react";
import style from "./PaymentItem.module.scss";
import Image from "next/image";

interface IPaymentItem {
    imgSources: string[],
    title: string,
}

const PaymentItem: FC<IPaymentItem> = ({ imgSources, title }) => {
    return (
        <label className={style.item}>
            <input className={style.item__input} type="radio" name="payment" />

            <div className={style.item__radio}>
                <div className={style.item__icons}>
                    {
                        imgSources.map(imgSource =>
                            <Image
                                key={imgSource}
                                src={imgSource}
                                className={style.item__icon}
                                alt={title}
                                width={50}
                                height={32}
                            />
                        )
                    }
                </div>

                <div className={style.item__title}>{title}</div>
            </div>
        </label>
    );
}

export default PaymentItem;