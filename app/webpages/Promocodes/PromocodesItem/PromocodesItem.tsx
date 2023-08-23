import {FC} from "react";
import style from './PromocodesItem.module.scss';
import {IUserPromocode} from "@/models/IPromocode";
import {separateByCommas} from "@/lib/string/separateByCommas";


interface PromocodesItemProps {
    userPromocode: IUserPromocode
}

const PromocodesItem: FC<PromocodesItemProps> = ({ userPromocode }) => {
    return (
        <div className={`${style.coupon} ${!userPromocode.isUsed && style.coupon_active}`}>
            <div className={style.left}>
                <div className={style.title}>{userPromocode.promocode.title}</div>

                <div className={style.info}>
                    Категории:
                    <span>{separateByCommas(userPromocode.promocode.categories)}</span>
                </div>
            </div>

            <div className={style.right}>
                Промокод: {userPromocode.promocode.value}
            </div>
        </div>
    );
}

export default PromocodesItem;