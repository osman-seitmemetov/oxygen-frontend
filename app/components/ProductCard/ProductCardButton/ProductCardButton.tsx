import React, {FC, useEffect, useState} from "react";
import style from './ProductCardButton.module.scss';
import {IProduct} from "@/models/IProduct";
import {useAuth} from "@/hooks/useAuth";
import {useActions} from "@/hooks/useActions";
import {useCart} from "@/hooks/useCart";
import {cartAPI} from "@/services/CartService";


interface ProductCardButtonProps {
    product: IProduct
}

const ProductCardButton: FC<ProductCardButtonProps> = ({product}) => {
    const {user} = useAuth();
    const {data} = cartAPI.useFetchCartQuery();

    const [addToCart, {isLoading: isAddLoading}] = cartAPI.useAddToCartMutation();
    const [deleteFromCart, {isLoading: isDeleteLoading}] = cartAPI.useDeleteFromCartMutation();

    const {
        addProductToCart,
        deleteProductFromAuthCart,
        deleteProductFromCart,
        setProductIdForLoading
    } = useActions();
    const {items} = useCart();

    const addHandler = async () => {
        if (user) addToCart(product.id);
        else addProductToCart({product, count: 1, id: 1});
    }

    const deleteHandler = () => {
        // setProductIdForLoading(product.id);
        if (user) deleteFromCart(product.id);
        deleteProductFromCart({product, count: 1, id: 1});
    }

    return (
        <>
            {
                data?.items.find(i => i.product.id === product.id)
                    ? <button
                        onClick={deleteHandler}
                        className={style.button}
                        disabled={isDeleteLoading}
                    >
                        Удалить
                    </button>
                    : <button
                        onClick={addHandler}
                        className={style.button}
                        disabled={isAddLoading}
                    >
                        В корзину
                    </button>
            }
        </>
    );
}

export default ProductCardButton;