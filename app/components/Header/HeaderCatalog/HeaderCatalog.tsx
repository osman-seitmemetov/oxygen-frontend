import {FC} from "react";
import style from "./HeaderCatalog.module.scss";
import Link from "next/link";

interface HeaderCatalogProps {
}

const HeaderCatalog: FC<HeaderCatalogProps> = () => {
    return (
        <Link href="/categories" className={style.catalog}>
            Каталог
        </Link>
    );
}

export default HeaderCatalog;