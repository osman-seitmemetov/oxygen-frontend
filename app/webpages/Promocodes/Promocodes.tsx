import {FC, ReactNode} from "react";
import style from './Promocodes.module.scss';
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import PromocodesItem from "./PromocodesItem/PromocodesItem";
import Account from "@/components/Account/Account";
import AccountItems from "@/components/Account/AccountItems/AccountItems";
import AccountTabs from "@/components/Account/AccountTabs/AccountTabs";
import {usePromocodes} from "@/webpages/Promocodes/usePromocodes";
import AccountEmpty from "@/components/Account/AccountEmpty/AccountEmpty";
import PictureOrdersEmpty from "@/components/pictures/PictureOrdersEmpty";


export interface ITabItem {
    title: string,
    content: ReactNode
}

const Promocodes: FC = () => {
    const {userPromocodes, isLoading} = usePromocodes();
    const activePromocodesCondition = userPromocodes && userPromocodes?.data.filter(userPromocode => !userPromocode.isUsed).length > 0;
    const usedPromocodesCondition = userPromocodes && userPromocodes?.data.filter(userPromocode => userPromocode.isUsed).length > 0

    const tabItems: ITabItem[] = [
        {
            title: 'Активные промокоды',
            content: activePromocodesCondition
                ? <AccountItems>
                    {userPromocodes?.data.filter(userPromocode => !userPromocode.isUsed).map(userPromocode => <PromocodesItem
                        key={userPromocode.id} userPromocode={userPromocode}/>)}
                </AccountItems>
                : <AccountEmpty title="У вас нет активных промокодов">
                    <PictureOrdersEmpty/>
                </AccountEmpty>
        },
        {
            title: 'Использованные промокоды',
            content: usedPromocodesCondition
                ? <AccountItems>
                    {userPromocodes?.data.filter(userPromocode => userPromocode.isUsed).map(userPromocode => <PromocodesItem
                        key={userPromocode.id} userPromocode={userPromocode}/>)}
                </AccountItems>
                : <AccountEmpty title="У вас нет использованных промокодов">
                    <PictureOrdersEmpty/>
                </AccountEmpty>
        }
    ];

    return (
        <Account title="Мои промокоды">
            <div className={style.coupons}>
                <ButtonGreen isFloating type="button">Как использовать промокоды?</ButtonGreen>
                <AccountTabs items={tabItems} hintTitle="Как использовать промокоды?"/>
            </div>
        </Account>
    );
}

export default Promocodes;