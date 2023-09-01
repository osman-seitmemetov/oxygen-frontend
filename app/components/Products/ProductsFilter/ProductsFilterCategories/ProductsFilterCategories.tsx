import React, {FC} from "react";
import styles from "./ProductsFilterCategories.module.scss";
import Link from "next/link";
import ProductsFilterGroup from "@/components/Products/ProductsFilter/ProductsFilterGroup/ProductsFilterGroup";
import {ICategoryFields} from "@/components/forms/AdminCategoryForm/useAdminCategoryForm";
import {ICategory} from "@/models/ICategory";

interface ProductsFilterCategoriesProps {
    category: ICategoryFields,
    parent1Lvl?: ICategory,
    parent2Lvl?: ICategory,
    childCategory2Lvls: ICategory[],
    childCategory3Lvls: ICategory[]
}

const ProductsFilterCategories: FC<ProductsFilterCategoriesProps> = (props) => {

    return (
        <ProductsFilterGroup title="Категории">
            {
                props.parent1Lvl && <Link
                    href={`/categories/${props.parent1Lvl.id}`}
                    className={`${styles.category} ${styles.category_back}`}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
                        />
                    </svg>

                    {props.parent1Lvl.name}
                </Link>
            }

            {
                props.parent2Lvl && <Link
                    href={`/categories/${props.parent2Lvl.id}`}
                    className={`${styles.category} ${styles.category_back}`}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
                        />
                    </svg>

                    {props.parent2Lvl.name}
                </Link>
            }

            <div className={`${styles.category} ${styles.category_current}`}>{props.category.name}</div>

            {
                props.childCategory2Lvls.map(childCategory =>
                    <Link
                        href={`/categories/${childCategory.id}`}
                        key={childCategory.id}
                        className={`${styles.category} ${styles.category_child}`}
                    >
                        {childCategory.name}
                    </Link>
                )
            }

            {
                String(props.category.lvl) === "2" && props.childCategory3Lvls.map(childCategory =>
                    <Link
                        href={`/categories/${childCategory.id}`}
                        key={childCategory.id}
                        className={`${styles.category} ${styles.category_child}`}
                    >
                        {childCategory.name}
                    </Link>
                )
            }
        </ProductsFilterGroup>
    );
}

export default ProductsFilterCategories;