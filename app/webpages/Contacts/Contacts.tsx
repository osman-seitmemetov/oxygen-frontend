import {FC} from "react";
import style from './Contacts.module.scss';
import ContactsForm from "./ContactsForm/ContactsForm";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Container from "../../components/Container/Container";
import PictureContacts from "../../components/pictures/PictureContacts";

const Contacts: FC = () => {
    return (
        <section className={style.contacts}>
            <Container>
                <PrimaryButton isFloating>Форма обратной связи</PrimaryButton>

                <div className={style.info}>
                    <PictureContacts className={style.info__img_mobile}/>

                    <h1 className={"h1 " + style.info__title}>Контакты</h1>

                    <div className={style.info__text}>По вопросам работы электронного магазина воспользуйтесь &quot;формой
                        обратной связи&quot;, либо звоните по телефонам:
                    </div>

                    <div className={style.phone}>
                        <div className={style.phone__inner}>
                            <svg className={style.phone__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.7716 2.43923L8.84819 2.09522C9.85701 1.77287 10.9349 2.29382 11.3669 3.31256L12.2266 5.33991C12.6013 6.22336 12.3934 7.26227 11.7126 7.9084L9.81832 9.70641C9.9352 10.7819 10.2967 11.8409 10.9029 12.8834C11.509 13.9259 12.266 14.7907 13.1739 15.4778L15.4491 14.7191C16.3115 14.4315 17.2507 14.762 17.7797 15.5392L19.0121 17.3498C19.627 18.2532 19.5164 19.4995 18.7534 20.2655L17.9356 21.0865C17.1217 21.9036 15.9592 22.2 14.8838 21.8645C12.3449 21.0726 10.0106 18.7214 7.88083 14.8109C5.74796 10.8947 4.99521 7.57214 5.62258 4.84313C5.88658 3.69482 6.70409 2.78033 7.7716 2.43923Z"/>
                            </svg>

                            <span className={style.phone__number}>
                                8 727 225 5011
                            </span>

                            <div className={style.phone__date}>
                                Пн-Пт: 9:00 - 18:00 / <span>Сб-Вс выходной</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.phone}>
                        <div className={style.phone__inner}>
                            <svg className={style.phone__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.7716 2.43923L8.84819 2.09522C9.85701 1.77287 10.9349 2.29382 11.3669 3.31256L12.2266 5.33991C12.6013 6.22336 12.3934 7.26227 11.7126 7.9084L9.81832 9.70641C9.9352 10.7819 10.2967 11.8409 10.9029 12.8834C11.509 13.9259 12.266 14.7907 13.1739 15.4778L15.4491 14.7191C16.3115 14.4315 17.2507 14.762 17.7797 15.5392L19.0121 17.3498C19.627 18.2532 19.5164 19.4995 18.7534 20.2655L17.9356 21.0865C17.1217 21.9036 15.9592 22.2 14.8838 21.8645C12.3449 21.0726 10.0106 18.7214 7.88083 14.8109C5.74796 10.8947 4.99521 7.57214 5.62258 4.84313C5.88658 3.69482 6.70409 2.78033 7.7716 2.43923Z"/>
                            </svg>

                            <span className={style.phone__number}>
                        8 800 080 5011
                    </span>

                            <div className={style.phone__date}>
                                Пн-Пт: 9:00 - 18:00 / <span>Сб-Вс выходной</span>
                            </div>
                        </div>

                        <div className={style.phone__desc}>Бесплатный звонок со всех операторов</div>
                    </div>

                    <PictureContacts className={style.info__img}/>
                </div>

                <ContactsForm/>
            </Container>
        </section>
    );
}

export default Contacts;