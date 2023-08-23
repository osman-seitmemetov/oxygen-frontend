import {FC, useRef} from "react"
import style from './ProductSlider.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCardEnd from "../ProductCardEnd/ProductCardEnd";
import Container from "../Container/Container";
import Link from "next/link";
import {IProduct} from "@/models/IProduct";
// import {Navigation} from "swiper/types/modules";

interface ProductSliderProps {
    title: string
    className?: string
    products: IProduct[]
}

const ProductSlider: FC<ProductSliderProps> = ({title, products}) => {
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);

    return (
        <section className={style.products}>
            <Container>
                <div className={style.head}>
                    <h2 className={style.title}>{title}</h2>
                    <Link href="/categories?category="><div className={style.link}>Cмотреть все</div></Link>
                </div>

                <div className={style.productsBody}>
                    <div>
                        <div
                            className={style.buttonNext}
                            ref={nextButtonRef}
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"/>
                            </svg>
                        </div>

                        <div
                            className={style.buttonPrev}
                            ref={prevButtonRef}
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"/>
                            </svg>
                        </div>
                    </div>

                    <Swiper
                        className={style.slider}
                        slidesPerView={4}
                        spaceBetween={60}
                        // navigation={
                        //     // {
                        //     //     prevEl: prevButtonRef.current,
                        //     //     nextEl: nextButtonRef.current,
                        //     // }
                        // }
                        // modules={[Navigation]}
                        // onInit={(swiper) => {
                        //     swiper.params.navigation = {
                        //         prevEl: prevButtonRef.current,
                        //         nextEl: nextButtonRef.current
                        //     };
                        //
                        //     // swiper.navigation.init();
                        //     swiper.navigation.update();
                        // }}
                        // IOSEdgeSwipeDetection={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 'auto',
                                freeMode: true,
                                spaceBetween: 15,
                                watchOverflow: false
                            },

                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                watchOverflow: true,
                                freeMode: false,
                            },

                            992: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                                watchOverflow: true,
                                freeMode: false,
                            },

                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 60,
                                watchOverflow: true,
                                freeMode: false,
                            }
                        }}
                    >
                        {
                            products?.map(product =>
                                <SwiperSlide key={product.id}>
                                    <ProductCard
                                        product={product}
                                    />
                                </SwiperSlide>
                            )
                        }

                        <SwiperSlide>
                            <ProductCardEnd/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    );
}

export default ProductSlider;