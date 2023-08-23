import { FC } from "react";
import style from './FAQItem.module.scss';
import {IFAQItem} from "@/types/types";
import parse from 'html-react-parser';


interface FAQItemProps {
    item: IFAQItem
}

const FAQItem: FC<FAQItemProps> = ({ item }) => {
    return (
        <details className={style.accordeon}>
            <summary className={style.head}>
                <div className={style.title}>{item.title}</div>

                <svg className={style.icon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.57611 6.91076C3.90155 6.58533 4.42918 6.58533 4.75462 6.91076L9.9987 12.1548L15.2428 6.91076C15.5682 6.58533 16.0958 6.58533 16.4213 6.91076C16.7467 7.2362 16.7467 7.76384 16.4213 8.08928L10.588 13.9226C10.2625 14.248 9.73488 14.248 9.40944 13.9226L3.57611 8.08928C3.25067 7.76384 3.25067 7.2362 3.57611 6.91076Z" />
                </svg>
            </summary>

            <div className={style.content}>
                {parse(item.text)}
            </div>
        </details>
    );
}

export default FAQItem;