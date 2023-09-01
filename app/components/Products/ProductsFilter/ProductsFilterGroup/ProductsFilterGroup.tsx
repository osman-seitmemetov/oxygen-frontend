import React, {FC, ReactNode} from "react";
import styles from "./ProductsFilterGroup.module.scss";

interface ProductFilterGroupProps {
    children?: ReactNode,
    title: string
}

const ProductsFilterGroup: FC<ProductFilterGroupProps> = ({children, title}) => {

    return (
        <div className={styles.filter}>
            <div className={styles.filter__title}>{title}</div>
            {children}
        </div>
    );
}

export default ProductsFilterGroup;