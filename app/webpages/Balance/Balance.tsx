import { FC } from "react";
import style from './Balance.module.scss';
import Payment from "@/components/Payment/Payment";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import {inputModes} from "@/UI/InputGroup/Input/InputEnums";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
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
                <PrimaryButton className={style.balance__btn}>Пополнить баланс</PrimaryButton>
            </div>
        </Account>
    );
}

export default Balance;