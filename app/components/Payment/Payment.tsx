import { FC } from "react";
import AlfaBankImg from '../../assets/img/alfabank-icon.png';
import AmericanExpressImg from '../../assets/img/americanexpress-icon.svg';
import ATF24Img from '../../assets/img/atf24-icon.png';
import RBKBankImg from '../../assets/img/bankrbk-icon.png';
import EurasianBankImg from '../../assets/img/eurasianbank-icon.png';
import Kassa24Img from '../../assets/img/kassa24-icon.png';
import MasterCardImg from '../../assets/img/mastercard-icon.svg';
import QiviImg from '../../assets/img/qiwi-icon.svg';
import SberbankImg from '../../assets/img/sberbank-icon.svg';
import VisaImg from '../../assets/img/visa-icon.svg';
import style from './Payment.module.scss';
import PaymentItem from "./PaymentItem/PaymentItem";


const Payment: FC = () => {
    const paymentItems = [
        { id: 1, imgSources: [MasterCardImg, VisaImg], title: 'Банковские карты Visa, MasterCard, American Express' },
        { id: 2, imgSources: [Kassa24Img], title: 'Терминалы Касса24' },
        { id: 3, imgSources: [ATF24Img], title: 'Интернет банкинг АТФ24' },
        { id: 4, imgSources: [AlfaBankImg], title: 'Интернет Банкинг AlfaBank' },
        { id: 5, imgSources: [RBKBankImg], title: 'Интернет Банкинг RBK банк' },
        { id: 6, imgSources: [EurasianBankImg], title: 'Интернет Банкинг Евразийский' },
        { id: 7, imgSources: [SberbankImg], title: 'Интернет Банкинг Сбербанк Казахстан' },
        { id: 8, imgSources: [QiviImg], title: 'Кошелек Qiwi' },
        { id: 9, imgSources: [AmericanExpressImg], title: 'Банковские карты Visa, MasterCard, American Express' },
    ]

    return (
        <div className={style.payment}>
            {
                paymentItems.map(paymentItem =>
                    <PaymentItem
                        key={paymentItem.id}
                        imgSources={paymentItem.imgSources}
                        title={paymentItem.title}
                    />
                )
            }
        </div>
    );
}

export default Payment;