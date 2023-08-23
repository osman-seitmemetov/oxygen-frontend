import {ICategory} from "@/models/ICategory";
import {IOption} from "@/models/IOption";


export const convertCategoriesForSelect = (categories: ICategory[], params: {
    withoutThird?: boolean,
    withoutSecond?: boolean,
    withoutFirst?: boolean
}) => {
    const categoriesLvl1 = categories.filter(category => Number(category.lvl) === 1);
    const categoriesLvl2 = categories.filter(category => Number(category.lvl) === 2);
    const categoriesLvl3 = categories.filter(category => Number(category.lvl) === 3);
    let parsedCategories: IOption[] = [];

    !params.withoutThird && categoriesLvl3.forEach(categoryLvl3 => {
        const categoryLvl2 = categoriesLvl2.find(el => el.id === categoryLvl3.parentId);
        const categoryLvl1 = categoriesLvl1.find(el => el.id === categoryLvl2?.parentId);

        return parsedCategories.push({
            label: `${categoryLvl1?.name} > ${categoryLvl2?.name} > ${categoryLvl3.name}`,
            value: categoryLvl3.id
        } as IOption)
    });

    !params.withoutSecond && categoriesLvl2.forEach(categoryLvl2 => {
        const categoryLvl1 = categoriesLvl1.find(el => el.id === categoryLvl2.parentId);

        return parsedCategories.push({
            label: `${categoryLvl1?.name} > ${categoryLvl2.name}`,
            value: categoryLvl2.id
        } as IOption)
    });

    !params.withoutFirst && categoriesLvl1.forEach(categoryLvl1 =>
        parsedCategories.push({
            label: `${categoryLvl1.name}`,
            value: categoryLvl1.id
        } as IOption)
    );

    return parsedCategories;
}