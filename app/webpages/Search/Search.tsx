import React, {FC} from "react";
import style from './Search.module.scss';
import SearchFilter from './SearchFilter/SearchFilter';
import ButtonGreen from "@/components/UI/buttons/ButtonGreen/ButtonGreen";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import SearchItemsContainer from "@/webpages/Search/SearchItems/SearchItemsContainer";


const Search: FC = () => {
    return (
        <section className={style.search}>
            <Container className={style.container}>
                <ButtonGreen isFloating>Фильтры</ButtonGreen>
                <Title className={style.title}>Консервы</Title>

                <div className={style.components}>
                    <SearchFilter />
                    <SearchItemsContainer />
                </div>
            </Container>
        </section>
    );
}

export default Search;