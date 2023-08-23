import { FC } from "react";
import style from './Balance.module.scss';
import Payment from "@/components/Payment/Payment";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import {inputModes} from "@/UI/InputGroup/Input/InputEnums";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import Account from "@/components/Account/Account";


const Balance: FC = () => {
    return (
        <Account title="Баланс">
            <div className={style.balance}>
                <InputGroup title="Сумма пополнения баланса" className={style.balance__input}>
                    <Input placeholder="Введите сумму" type="text" inputMode={inputModes.numeric} />
                </InputGroup>

                <div className={style.balance__title}>Выберите способ пополнения баланса</div>
                <Payment />
                <ButtonGreen className={style.balance__btn}>Пополнить баланс</ButtonGreen>
            </div>
        </Account>
    );
}

export default Balance;