import {FC} from "react";
import style from './SearchFilter.module.scss';
import Checkbox from "@/components/Checkbox/Checkbox";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";

const SearchFilter: FC = () => {
    return (
        <form className={style.sidebar}>
            <div className={style.filter}>
                <div className={style.filter__title}>Стоимость в тенге</div>

                <div className={style.filter__settings}>
                    <div className={style.filter__setting}>
                        от
                        <input type="text" inputMode="numeric" className={style.filter__input} placeholder="0 тг" />
                    </div>

                    <div className={style.filter__setting}>
                        до
                        <input type="text" inputMode="numeric" className={style.filter__input} placeholder="0 тг" />
                    </div>
                </div>
            </div>

            <Checkbox className={style.checkbox} >Акции</Checkbox>
            <Checkbox className={style.checkbox}>В наличии</Checkbox>
            <Checkbox className={style.checkbox}>Популярные товары</Checkbox>
            <Checkbox className={style.checkbox}>Новинки</Checkbox>

            <PrimaryButton type="submit" className={style.submit}>Применить</PrimaryButton>
            <SecondaryButton type="reset" className={style.reset}>Сбросить</SecondaryButton>
        </form>
    );
}

export default SearchFilter;