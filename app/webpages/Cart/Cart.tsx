import {FC} from "react";
import style from "./Cart.module.scss";
import CartItem from './CartItem/CartItem';
import CartInfo from "./CartInfo/CartInfo";
import Container from "@/components/Container/Container";
import {useCart} from "@/hooks/useCart";
import {cartAPI} from "@/services/CartService";


const Cart: FC = () => {
    const {data, isLoading} = cartAPI.useFetchCartQuery();
    const [deleteAllFromCart] = cartAPI.useDeleteAllFromCartMutation();

    const deleteAllHandler = () => deleteAllFromCart();

    return (
        <>
            <section className={style.cart}>
                <Container>
                    {
                        isLoading
                            ? <div>loading...</div>
                            : (data?.items.length && data.items.length > 0)
                                ? <>
                                    <div className={style.cart__left}>
                                        <div className={style.cart__head}>
                                            <h1 className={style.cart__title + " title"}>Корзина</h1>
                                            <button
                                                className={style.cart__clean}
                                                onClick={deleteAllHandler}
                                            >
                                                Очистить корзину
                                            </button>
                                        </div>

                                        <div className={style.cart__items}>
                                            {
                                                data.items.map(item =>
                                                    <CartItem
                                                        key={item.product.id}
                                                        cartProduct={item}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>

                                    <CartInfo count={data.count} sum={data.items[0].product.price}/>
                                </>
                                : <div>Корзина пуста</div>
                    }
                </Container>
            </section>

            {/*<ProductsSlider title="Свежие акции" products={products}/>*/}
        </>
    );
}

export default Cart;