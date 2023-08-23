import { FC } from "react";
import style from "./ProductTable.module.scss";

const ProductTable: FC = () => {
    return (
            <div>
                <div className={style.table}>
                    <table className={`${style.table__content} ${style.descTable}`}>
                        <caption className={style.descTable__title}>Состав комплекта:</caption>

                        <thead className={style.descTable__head}>
                            <td className={style.descTable__headItem}>№</td>
                            <td className={style.descTable__headItem}>Товар</td>
                            <td className={style.descTable__headItem}>Количество</td>
                            <td className={style.descTable__headItem}>Вес</td>
                        </thead>

                        <tbody className={style.descTable__body}>
                            <tr>
                                <td className={style.descTable__bodyNumber}>1</td>
                                <td className={style.descTable__bodyTitle}>Сигареты Winston Xstyle Dual</td>
                                <td className={style.descTable__bodyCount}>1 шт</td>
                                <td className={style.descTable__bodyWeight}>23гр.</td>
                            </tr>

                            <tr>
                                <td className={style.descTable__bodyNumber}>2</td>
                                <td className={style.descTable__bodyTitle}>Сигареты L&M Liggett Myers Lounge Mix</td>
                                <td className={style.descTable__bodyCount}>1 шт</td>
                                <td className={style.descTable__bodyWeight}>22гр.</td>
                            </tr>

                            <tr>
                                <td className={style.descTable__bodyNumber}>3</td>
                                <td className={style.descTable__bodyTitle}>Сигареты Winston XStyle Silver</td>
                                <td className={style.descTable__bodyCount}>1 шт</td>
                                <td className={style.descTable__bodyWeight}>22гр.</td>
                            </tr>

                            <tr>
                                <td className={style.descTable__bodyNumber}>4</td>
                                <td className={style.descTable__bodyTitle}>Сигареты LD Club Compact Silver</td>
                                <td className={style.descTable__bodyCount}>1 шт</td>
                                <td className={style.descTable__bodyWeight}>22гр.</td>
                            </tr>

                            <tr>
                                <td className={style.descTable__bodyNumber}>5</td>
                                <td className={style.descTable__bodyTitle}>Блок Сигареты Kent White</td>
                                <td className={style.descTable__bodyCount}>1 шт</td>
                                <td className={style.descTable__bodyWeight}>220гр.</td>
                            </tr>

                            <tr>
                                <td className={style.descTable__bodyNumber}>6</td>
                                <td className={style.descTable__bodyTitle}>Сигареты Camel Blue</td>
                                <td className={style.descTable__bodyCount}>1 шт</td>
                                <td className={style.descTable__bodyWeight}>22гр.</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={style.table__bg}></div>
                </div>

                <button className={style.table__btn}>
                    <span>Показать весь список</span>

                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.21967 11.7803C3.51256 12.0732 3.98744 12.0732 4.28033 11.7803L9 7.06066L13.7197 11.7803C14.0126 12.0732 14.4874 12.0732 14.7803 11.7803C15.0732 11.4874 15.0732 11.0126 14.7803 10.7197L9.53033 5.46967C9.23744 5.17678 8.76256 5.17678 8.46967 5.46967L3.21967 10.7197C2.92678 11.0126 2.92678 11.4874 3.21967 11.7803Z" />
                    </svg>
                </button>
            </div>
    );
}

export default ProductTable;