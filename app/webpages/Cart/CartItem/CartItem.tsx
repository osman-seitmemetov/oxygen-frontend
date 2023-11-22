import {FC} from "react";
import Counter from '@/components/UI/Counter/Counter';
import style from "./CartItem.module.scss";
import {PRODUCT_ROUTE} from "@/lib/consts";
import Image from "next/image";
import Link from "next/link";
import {ICartProduct} from "@/models/ICart";
import {cartAPI} from "@/services/CartService";
import {useAuth} from "@/hooks/useAuth";

interface CartItemProps {
    cartProduct: ICartProduct,
}

const CartItem: FC<CartItemProps> = ({cartProduct,}) => {
    const {user} = useAuth();
    const [deleteFromCart, {isLoading: isDeleteLoading}] = cartAPI.useDeleteFromCartMutation();

    const deleteHandler = () => {
        if (user) deleteFromCart(cartProduct.product.id);
        // deleteProductFromCart({product, count: 1, id: 1});
    }

    return (
        <>
            <div className={style.item}>
                <Image
                    src={`http://localhost:5000/${cartProduct.product.img}`}
                    alt={cartProduct.product.name}
                    className={style.item__img}
                    width={79}
                    height={63}
                />

                <div className={style.item__data}>
                    <div className={style.item__left}>
                        <Link href={PRODUCT_ROUTE} className={style.item__title}>
                            {cartProduct.product.name}
                        </Link>
                        <div className={style.item__count}>Осталось: {cartProduct.product.count} шт.</div>
                    </div>

                    <div className={style.item__bottom_mobile}>
                        <Counter value={cartProduct.count} productId={cartProduct.id} min={1}
                                 max={cartProduct.product.count}/>

                        <div className={style.item__right}>
                            <div className={style.item__price}>
                                {cartProduct.product.isDiscount && cartProduct.product.newPrice ? (cartProduct.product.newPrice * cartProduct.count) : (cartProduct.product.price * cartProduct.count)} руб.
                                <span>{cartProduct.product.isDiscount ? cartProduct.product.newPrice : cartProduct.product.price} руб./шт.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className={style.item__close}
                    onClick={deleteHandler}
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.2097 4.3871L4.29289 4.29289C4.65338 3.93241 5.22061 3.90468 5.6129 4.2097L5.70711 4.29289L12 10.585L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.415 12L19.7071 18.2929C20.0676 18.6534 20.0953 19.2206 19.7903 19.6129L19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L12 13.415L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.585 12L4.29289 5.70711C3.93241 5.34662 3.90468 4.77939 4.2097 4.3871L4.29289 4.29289L4.2097 4.3871Z"/>
                    </svg>
                </button>
            </div>
        </>
    );
}

export default CartItem;