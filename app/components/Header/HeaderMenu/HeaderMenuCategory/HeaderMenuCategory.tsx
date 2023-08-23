import { FC } from "react";
import style from "./HeaderMenuCategory.module.scss";
import Link from "next/link";
import {ICategory} from "@/models/ICategory";

interface HeaderCategoryProps {
    category: ICategory
}

const HeaderMenuCategory: FC<HeaderCategoryProps> = ({category}) => {
    return (
        <Link href="" className={`${style.item} ${style.menuItem}`}>{category.name}</Link>
    );
}

export default HeaderMenuCategory;