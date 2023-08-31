import {ChangeEvent, CSSProperties, FC, useRef, useState} from "react";
import styles from "./HeaderSearch.module.scss";
import Link from "next/link";


interface HeaderSearchProps {
    searchTerm: string,
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    style?: CSSProperties,
    className?: string
}

const HeaderSearch: FC<HeaderSearchProps> = ({searchTerm, handleSearch, placeholder, style, className}) => {
    const inputSearch = useRef("cgccc");
    const [placeholderStyles, setPlaceholder] = useState(`${styles.placeholder}`);
    const [inputIcon, setInputIcon] = useState(`${styles.icon} ${styles.icon_hidden}`);
    const [inputDropdown, setInputDropdown] = useState(`${styles.dropdown} ${styles.dropdown_hidden}`);
    const [inputBG, setInputBG] = useState(`${styles.placeholder}`);

    const inputSearchFocus = () => {
        setPlaceholder(`${styles.placeholder} ${styles.placeholder_hidden}`);
        setInputIcon(`${styles.icon}`);
        setInputBG(``);
    }

    const inputSearchInput = () => {
        setInputDropdown(`${styles.dropdown}`);
    }

    const inputSearchBlur = () => {
        if(searchTerm === '') {
            setPlaceholder(`${styles.placeholder}`);
            setInputIcon(`${styles.icon} ${styles.icon_hidden}`);
            setInputDropdown(`${styles.dropdown} ${styles.dropdown_hidden}`);
        }
        setInputBG(``);
    }

    return (
        <div className={`${styles.search} ${className}`} style={style}>
            <svg className={inputIcon} width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.66669 2.16669C9.42811 2.16669 11.6667 4.40526 11.6667 7.16669C11.6667 8.30679 11.2851 9.35776 10.6427 10.1989L13.8048 13.3619C14.0651 13.6223 14.0651 14.0444 13.8048 14.3048C13.5644 14.5451 13.1863 14.5636 12.9248 14.3602L12.8619 14.3048L9.69886 11.1427C8.85776 11.7851 7.80679 12.1667 6.66669 12.1667C3.90526 12.1667 1.66669 9.92811 1.66669 7.16669C1.66669 4.40526 3.90526 2.16669 6.66669 2.16669ZM6.66669 3.50002C4.64164 3.50002 3.00002 5.14164 3.00002 7.16669C3.00002 9.19173 4.64164 10.8334 6.66669 10.8334C8.69173 10.8334 10.3334 9.19173 10.3334 7.16669C10.3334 5.14164 8.69173 3.50002 6.66669 3.50002Z"/>
            </svg>

            <div className={`${placeholderStyles}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.66669 2.16669C9.42811 2.16669 11.6667 4.40526 11.6667 7.16669C11.6667 8.30679 11.2851 9.35776 10.6427 10.1989L13.8048 13.3619C14.0651 13.6223 14.0651 14.0444 13.8048 14.3048C13.5644 14.5451 13.1863 14.5636 12.9248 14.3602L12.8619 14.3048L9.69886 11.1427C8.85776 11.7851 7.80679 12.1667 6.66669 12.1667C3.90526 12.1667 1.66669 9.92811 1.66669 7.16669C1.66669 4.40526 3.90526 2.16669 6.66669 2.16669ZM6.66669 3.50002C4.64164 3.50002 3.00002 5.14164 3.00002 7.16669C3.00002 9.19173 4.64164 10.8334 6.66669 10.8334C8.69173 10.8334 10.3334 9.19173 10.3334 7.16669C10.3334 5.14164 8.69173 3.50002 6.66669 3.50002Z"/>
                </svg>
                {placeholder}
            </div>

            <input
                type="text"
                onFocus={inputSearchFocus}
                onBlur={inputSearchBlur}
                onInput={inputSearchInput}
                value={searchTerm}
                onChange={handleSearch}
            />

            <div className={inputDropdown}>
                <Link href="/search" className={styles.dropdown__item}>Консервы</Link>
                <Link href="/search" className={styles.dropdown__item}>Консервированные каши</Link>
                <Link href="/search" className={styles.dropdown__item}>Консервы фруктовые</Link>
                <Link href="/search" className={styles.dropdown__item}>Консервы овощные</Link>
            </div>
        </div>
    );
}

export default HeaderSearch;