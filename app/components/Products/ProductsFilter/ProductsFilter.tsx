import {FC} from "react";
import style from './ProductsFilter.module.scss';
import Checkbox from "@/components/Checkbox/Checkbox";
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import ButtonTransparent from "@/components/UI/buttons/ButtonTransparent/ButtonTransparent";
import Link from "next/link";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import {useProductsFilter} from "@/components/Products/useProductsFilter";

interface ProductFilterProps {
    category: ICategoryFields,
}

const ProductsFilter: FC<ProductFilterProps> = ({category}) => {
    const {
        childrenData,
        isChildrenLoading,
        brandsData,
        isBrandsLoading,
        typesData,
        isTypesLoading
    } = useProductsFilter()
    const childCategories = childrenData?.data;
    const brands = brandsData?.data;
    const types = typesData?.data;

    let sortedTypes = [];
    let sortedBrands = [];

    childCategories?.childCategory3Lvls.forEach(childCategory3Lvl => types?.filter(type => childCategory3Lvl.id === type.categoryId).forEach(type => sortedTypes.push(type)));

    return (
        <>
            <form className={style.sidebar}>
                {
                    isChildrenLoading
                        ? <div>Loading...</div>
                        : childCategories ? <div className={style.filter}>
                                <div className={style.filter__title}>Категории</div>

                                {
                                    childCategories.parent1Lvl
                                    && <Link href={`/categories/${childCategories.parent1Lvl.id}`} style={{display: "block"}}>
                                        {`< ${childCategories.parent1Lvl.name}`}
                                    </Link>
                                }

                                {
                                    childCategories.parent2Lvl
                                    && <Link href={`/categories/${childCategories.parent2Lvl.id}`} style={{display: "block"}}>
                                        {`< ${childCategories.parent2Lvl.name}`}
                                    </Link>
                                }

                                <div style={{display: "block"}}>{category.name}</div>

                                {
                                    childCategories.childCategory2Lvls?.map(childCategory =>
                                        <Link style={{display: "inline-flex"}} href={`/categories/${childCategory.id}`}
                                              key={childCategory.id}>
                                            {childCategory.name}
                                        </Link>
                                    )
                                }
                                {
                                    String(category.lvl) === "2" && childCategories.childCategory3Lvls?.map(childCategory =>
                                        <Link style={{display: "inline-flex", marginLeft: 10}}
                                              href={`/categories/${childCategory.id}`}
                                              key={childCategory.id}>
                                            {childCategory.name}
                                        </Link>
                                    )
                                }
                            </div>
                            : <div>Возникла ошибка при загрузке</div>
                }

                <div className={style.filter}>
                    <h3 className={style.filter__title}>Типы:</h3>
                    {
                        types?.map(type => <Checkbox className={style.checkbox} key={type.id}>
                            {type.name}
                        </Checkbox>)
                    }
                </div>

                <div className={style.filter}>
                    <h3 className={style.filter__title}>Бренды:</h3>
                    {
                        brands?.map(brand => <Checkbox className={style.checkbox} key={brand.id}>
                            {brand.name}
                        </Checkbox>)
                    }
                </div>

                <div className={style.filter}>
                    <div className={style.filter__title}>Стоимость в рублях</div>

                    <div className={style.filter__settings}>
                        <div className={style.filter__setting}>
                            от
                            <input type="text" inputMode="numeric" className={style.filter__input} placeholder="0 руб"/>
                        </div>

                        <div className={style.filter__setting}>
                            до
                            <input type="text" inputMode="numeric" className={style.filter__input} placeholder="0 руб"/>
                        </div>
                    </div>
                </div>

                <Checkbox className={style.checkbox}>Акции</Checkbox>
                <Checkbox className={style.checkbox}>В наличии</Checkbox>
                <Checkbox className={style.checkbox}>Популярные товары</Checkbox>
                <Checkbox className={style.checkbox}>Новинки</Checkbox>

                <ButtonGreen type="submit" className={style.submit}>Применить</ButtonGreen>
                <ButtonTransparent type="reset">Сбросить</ButtonTransparent>
            </form>
        </>
    );
}

export default ProductsFilter;