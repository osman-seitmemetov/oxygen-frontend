import {FC} from "react";
import style from "./CartOrder.module.scss";
import InputGroup from "@/components/UI/InputGroup/InputGroup";
import Input from "@/components/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import FormWarning from "@/components/Form/FormWarning/FormWarning";
import Form from "@/components/Form/Form";
import Title from "@/components/Title/Title";
import Checkbox from "@/components/Checkbox/Checkbox";
import Container from "@/components/Container/Container";
import FormAdditional from "@/components/Form/FormAdditional/FormAdditional";
import InputDate from "@/components/UI/InputGroup/InputDate/InputDate";


const CartOrder: FC = () => {
    return (
        <section className={style.cartRegistration}>
            <Container>
                <Title>Оформление заказа</Title>
                <Form>
                    <InputGroup title="Адрес">
                        <Input placeholder="Алматы" type="text" inputMode="text"/>
                        <Input placeholder="ЕЦ-166/4" type="text" inputMode="text"/>
                    </InputGroup>

                    <InputGroup title="Данные получателя">
                        <Input placeholder="Логин" type="text" inputMode="text"/>

                        <Input placeholder="Имя" type="text" inputMode="text"/>
                        <Input placeholder="Фамилия" type="text" inputMode='text'/>
                    </InputGroup>

                    <InputGroup title="Дата рождения*">
                        {/*<InputDate dateFormat="dd.MM.yyyy" placeholder="дд.мм.гггг" mask="11.11.1111"/>*/}
                    </InputGroup>

                    <FormAdditional>
                        <Checkbox isSmall>Не знаю логин</Checkbox>
                    </FormAdditional>

                    <InputGroup title="Дата доставки">
                        {/*<InputDate dateFormat="dd.MM.yyyy" placeholder="дд.мм.гггг" mask="11.11.1111"/>*/}
                    </InputGroup>

                    <FormWarning title="Внимание!" text="Дата доставки может быть изменена администратором"/>

                    <div className={style.cartRegistration__result}>
                        Итого:
                        <div className={style.cartRegistration__resultSum}>32 500 тг.</div>
                    </div>

                    <FormAdditional>
                        <Checkbox isSmall>
                            Я подтверждаю, что ознакомлен и согласен с
                            условиями <span> публичной оферты</span> электронного магазина Convex
                        </Checkbox>
                    </FormAdditional>

                    <PrimaryButton type="submit">Выбрать вариант оплаты</PrimaryButton>
                </Form>
            </Container>
        </section>
    );
}

export default CartOrder;