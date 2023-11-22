import {FC} from "react";
import styles from './Propositions.module.scss';
import PlovImg from '@/assets/img/plov.png';
import M_MImg from '@/assets/img/m_m.png';
import PercentImg from '@/assets/img/percent.png';
import PacketImg from '@/assets/img/packet.png';
import Container from "@/components/Container/Container";
import Link from "next/link";


const Propositions: FC = () => {
    return (
        <section className={styles.propos}>
            <Container>
                <div className={styles.slider}>
                    <Link href="">
                        <div
                            className={styles.item}
                            style={{background: `url('${PlovImg.src}') 27px 15px no-repeat, linear-gradient(175.37deg, #FA6A6A -9.92%, #E43F3F 96.25%)`}}
                        >
                            <div className={styles.item__title}>Горячие блюда</div>
                            <p className={styles.item__label}>Вкуснейшие блюда из 4 ресторанов</p>
                        </div>
                    </Link>

                    <Link href="">
                        <div
                            className={styles.item}
                            style={{background: `url('${M_MImg.src}') 26px 9px no-repeat, linear-gradient(171.27deg, #A8CBFF -6.86%, #7BB0FF 93.34%)`}}
                        >
                            <div className={styles.item__title}>Новинки</div>
                            <p className={styles.item__label}>Новые позиции</p>
                        </div>
                    </Link>

                    <Link href="">
                        <div
                            className={styles.item}
                            style={{background: `url('${PercentImg.src}') 60px 25px no-repeat, linear-gradient(166.25deg, #BBB0FF -21.04%, #8470FF 90.17%)`}}
                        >
                            <div className={styles.item__title}>Акции</div>
                            <p className={styles.item__label}>Лучшие цены</p>
                        </div>
                    </Link>

                    <Link href="">
                        <div
                            className={styles.item}
                            style={{background: `url('${PacketImg.src}') -15px 0 no-repeat, linear-gradient(180.1deg, #FFD37D -7.02%, #FDC352 99.91%)`}}
                        >
                            <div className={styles.item__title}>Комплекты</div>
                            <p className={styles.item__label}>Все в одном</p>
                        </div>
                    </Link>
                </div>
            </Container>
        </section>
    );
}

export default Propositions;