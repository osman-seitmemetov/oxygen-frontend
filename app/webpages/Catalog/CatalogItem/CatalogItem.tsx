import React, {FC} from "react";
import {ICategory} from "@/models/ICategory";
import styles from "./CatalogItem.module.scss"
import Image from "next/image";
import Link from "next/link";


interface CatalogProps {
    category: ICategory
}

const Catalog: FC<CatalogProps> = ({category}) => {

    return (
        <Link href={`categories/${category.id}`}>
            <div className={styles.item}>
                {
                    category.img
                    ? <img width={130} height={130} src={`http://localhost:5000/${category.img}`} alt={category.name}/>
                    : <div className={styles.noImg}></div>
                }
                <h3 className={styles.title}>{category.name}</h3>
            </div>
        </Link>
    );
}

export default Catalog;