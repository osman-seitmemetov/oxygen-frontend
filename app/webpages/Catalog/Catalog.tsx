import React, {FC} from "react";
import style from './Catalog.module.scss';
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import {useCategories} from "@/webpages/Catalog/useCategories";
import CatalogItem from "@/webpages/Catalog/CatalogItem/CatalogItem";
import CatalogLoader from "@/webpages/Catalog/CatalogLoader/CatalogLoader";


const Catalog: FC = () => {
    const {data, isLoading} = useCategories();
    const categories = data?.data;

    return (
        <section className={style.catalog}>
            <Container className={style.container}>
                <Title className={style.title}>Каталог</Title>

                <div className={style.items}>
                    {
                        isLoading
                            ? <CatalogLoader/>
                            : categories?.map(category => <CatalogItem key={category.id} category={category}/>)
                    }
                </div>
            </Container>
        </section>
    );
}

export default Catalog;