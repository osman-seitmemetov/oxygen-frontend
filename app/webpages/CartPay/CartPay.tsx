import {FC} from "react";
import style from "./CartPay.module.scss";
import Payment from "@/components/Payment/Payment";
import ButtonGreen from "@/UI/buttons/ButtonGreen/ButtonGreen";
import {buttonTypes} from "@/UI/buttons/ButtonGreen/ButtonGreenEnums";
import Title from "@/components/Title/Title";
import Container from "@/components/Container/Container";
import {CART_ROUTE} from "@/lib/consts";

const CartPay: FC = () => {
    return (
        <section className={style.cartPayment}>
            <Container>
                <Title className={style.cartPayment__title}>Выберите способ оплаты</Title>

                <form action={CART_ROUTE} className={style.cartPayment__form}>
                    <Payment />
                    <ButtonGreen type={buttonTypes.submit} className={style.cartPayment__btn}>Продолжить</ButtonGreen>
                </form>
            </Container>
        </section>
    );
}

export default CartPay;