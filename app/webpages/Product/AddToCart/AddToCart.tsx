import {FC, useEffect, useState} from "react";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {useCart} from "@/webpages/Cart/useCart";
import {useMutation} from "react-query";
import {CartService} from "@/services/CartService";
import {toastError} from "@/lib/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import Counter from "@/UI/Counter/Counter";
import {ICartProduct} from "@/models/ICart";


interface AddToCartProps {
    productId: number,
    productCount: number
}

const AddToCart: FC<AddToCartProps> = ({productId, productCount}) => {
    const [isSmashed, setIsSmashed] = useState(false)
    const [cartProduct, setCartProduct] = useState<ICartProduct | undefined>(undefined)
    const {data, refetch} = useCart();
    const basketId = data?.data.id;

    useEffect(() => {
        if (data?.data) {
            const isProductInCart = data.data.basket_products.some((p) => p.product.id === productId)
            if (isSmashed !== isProductInCart) setIsSmashed(isProductInCart)
            setCartProduct(data.data.basket_products.find(p => p.product.id === productId));
        }
    }, [data?.data, isSmashed, productId, cartProduct])

    const {mutateAsync, isLoading: isAddLoading} = useMutation(
        'add to cart in single page',
        () => CartService.create({productId, basketId}),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при добавлении товара в корзину');
            },
            onSuccess() {
                setIsSmashed(true);
                refetch()
                toastr.success('Добавление товара', 'Товар добавлен в корзину');
            },
        }
    )

    // const {mutateAsync: changeCountAsync} = useMutation(['change count cart product', ],
    //     (data: { id: string, count: number }) => CartService.changeCount(data.id, data.count), {
    //         onError: (error) => {
    //             toastError(error, 'Возникла ошибка при измении количества');
    //         }
    //     });

    return (
        <>
            {
                !isSmashed
                    ? <PrimaryButton
                        // className={style.desc__btn}
                        disabled={isAddLoading}
                        onClick={() => mutateAsync()}
                    >
                        В корзину
                    </PrimaryButton>

                    // : <PrimaryButton
                    //     disabled
                    //     // className={style.desc__btn}
                    // >Нет в наличии</PrimaryButton>
                : cartProduct && <Counter value={cartProduct.count} min={1} max={productCount} productId={cartProduct.id}/>
            }
        </>
    );
}

export default AddToCart;