import {FC} from "react";
import style from "./Product.module.scss";
import Container from "@/components/Container/Container";
import {IProduct} from "@/models/IProduct";
import parse from "html-react-parser";
import Image from "next/image";
import ProductSlider from "@/components/ProductSlider/ProductSlider";


interface ProductProps {
    product: IProduct | undefined,
    productsForSlider: IProduct[],
}

const Product: FC<ProductProps> = ({product, productsForSlider}) => {
    if (!product) {
        return <div>Товара больше нет</div>
    }

    return (
        <>
            {
                product && <section className={style.product}>
                    <Container className={style.container}>
                        <Image
                            src={`http://localhost:5000/${product.img}`}
                            alt="Изображение товара"
                            className={style.img}
                            width={480}
                            height={383}
                        />

                        <div className={style.desc}>
                            <h1 className={style.desc__title}>{product.name}</h1>

                            <div className={style.desc__price}>
                                {
                                    product.isDiscount
                                        ? <>
                                            <span className={style.desc__priceNew}>{product.newPrice} руб.</span>
                                            <span className={style.desc__priceOld}>{product.price} руб.</span>
                                        </>
                                        : <>{product.price} руб.</>
                                }
                            </div>

                            <div className={style.desc__properties}>
                                {product.count > 0
                                    ? <div className={style.desc__property}>
                                        Товар доступен:&nbsp;
                                        <span>{product.count} шт.</span>
                                    </div>
                                    : <div className={style.desc__property}>Нет в наличии</div>
                                }

                                {
                                    // product.info && product.info.map(item => (
                                    //     <div key={item.id} className={style.desc__property}>
                                    //         {item.title}:&nbsp;<span>{item.value}</span>
                                    //     </div>
                                    // ))
                                }
                            </div>

                            {/*<ProductCheckboxGroup title="" properties={[]}/>*/}
                            {/*<ProductTable />*/}

                            {product.count > 0
                                // ? <PrimaryButton
                                //     className={style.desc__btn}
                                //     // onClick={() => addHandler(String(product?.id))}
                                // >
                                //     В корзину
                                // </PrimaryButton>
                                // ? <AddToCart productId={product.id} productCount={product.count} />
                                // : <PrimaryButton disabled className={style.desc__btn}>Нет в наличии</PrimaryButton>
                            }

                            <div className={style.desc__text}>{parse(product.description)}</div>
                        </div>
                    </Container>
                </section>
            }

            <ProductSlider title="С этим обычно покупают" products={productsForSlider}/>
        </>
    );
}

export default Product;