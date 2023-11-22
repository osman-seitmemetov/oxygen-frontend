import {FC, useRef} from "react";
import styles from './Banner.module.scss';
import BannerSlide from './BannerSlide/BannerSlide';
import {Swiper, SwiperSlide} from "swiper/react";
import Container from "@/components/Container/Container";
import {useBanners} from "@/webpages/Home/Banner/useBanners";
import {Autoplay, Navigation} from "swiper/modules";


const Banner: FC = () => {
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);

    const {isLoading, data} = useBanners();
    const banners = data?.data;

    return (
        <section className={styles.banner}>
            <Container className={styles.banner__container}>

                {
                    isLoading
                        ? <div>Loading...</div>
                        : <>
                            <div>
                                <div
                                    className={styles.banner__buttonNext}
                                    ref={nextButtonRef}
                                    // onClick={() => swiper.slideNext()}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"/>
                                    </svg>
                                </div>

                                <div
                                    className={styles.banner__buttonPrev}
                                    ref={prevButtonRef}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"/>
                                    </svg>
                                </div>
                            </div>

                            <Swiper
                                className={styles.banner__slider}
                                slidesPerView={1}
                                loop={true}
                                navigation={{
                                    prevEl: prevButtonRef.current,
                                    nextEl: nextButtonRef.current,
                                }}
                                autoplay={true}
                                modules={[Navigation, Autoplay]}
                            >
                                {banners?.map(banner =>
                                    <SwiperSlide
                                        key={banner.id}
                                        style={{
                                            height: "inherit"
                                        }}
                                    >
                                        <BannerSlide
                                            key={banner.id}
                                            slide={banner}
                                        />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </>
                }
            </Container>
        </section>
    );
}

export default Banner;