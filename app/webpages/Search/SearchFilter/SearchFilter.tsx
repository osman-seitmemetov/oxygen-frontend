import {FC} from "react";
import style from './SearchFilter.module.scss';
import Checkbox from "@/components/Checkbox/Checkbox";
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import ButtonTransparent from "@/components/UI/buttons/ButtonTransparent/ButtonTransparent";

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

            <ButtonGreen type="submit" className={style.submit}>Применить</ButtonGreen>
            <ButtonTransparent type="reset" className={style.reset}>Сбросить</ButtonTransparent>
        </form>
    );
}

export default SearchFilter;