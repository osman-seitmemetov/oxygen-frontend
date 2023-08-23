import {FC} from "react";
import style from "./Cart.module.scss";
import CartItem from './CartItem/CartItem';
import ProductsSlider from '@/components/ProductSlider/ProductSlider';
import CartInfo from "./CartInfo/CartInfo";
import ProductCardImg from "@/assets/img/product.png";
import Container from "@/components/Container/Container";
import {IProduct} from "@/models/IProduct";
import {useCart} from "@/webpages/Cart/useCart";
import {products} from "@/lib/productsMock";

const Cart: FC = () => {
    const {data, isLoading, deleteByIdAsync, deleteAllAsync, changeCountAsync} = useCart();
    const cart = data?.data;

    return (
        <>
            <section className={style.cart}>
                <Container>
                    {
                        isLoading
                            ? <div>loading...</div>
                            : cart?.count
                                ? <>
                                    <div className={style.cart__left}>
                                        <div className={style.cart__head}>
                                            <h1 className={style.cart__title + " title"}>Корзина</h1>
                                            <button
                                                className={style.cart__clean}
                                                onClick={() => deleteAllAsync()}
                                            >
                                                Очистить корзину
                                            </button>
                                        </div>

                                        <div className={style.cart__items}>
                                            {
                                                cart?.basket_products.map(item =>
                                                    <CartItem
                                                        key={item.product.id}
                                                        cartProduct={item}
                                                        deleteHandler={deleteByIdAsync}
                                                        changeCountHandler={changeCountAsync}
                                                    />
                                                )
                                            }
                                        </div>
                                    </div>

                                    <CartInfo count={cart.count} sum={cart.basket_products[0].product.price}/>
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