import {FC, useState} from "react";
import {ITabItem} from "@/webpages/Promocodes/Promocodes";
import style from "./AccountTabs.module.scss";


interface AccountTabsProps {
    items: ITabItem[],
    hintTitle?: string,
    hintModal?: any
}

const AccountTabs: FC<AccountTabsProps> = ({items, hintTitle, hintModal}) => {
    const [ active, setActive ] = useState<number>(0);

    // @ts-ignore
    const openTab = (e: any) => setActive(+e.target.dataset.index);

    return (
        <div className={style.tabsArea}>
            {hintModal}
            <div className={style.head}>
                <div className={style.head__tabs}>
                    {items.map((item, i) => (
                        <button
                            key={item.title}
                            type="button"
                            className={`${style.head__tab} ${i === active && style.head__tab_active}`}
                            onClick={openTab}
                            data-index={i}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                {hintTitle && <button type="button" className={style.head__hint}>{hintTitle}</button>}
            </div>

            {
                items[active] && <div className={style.content}>
                    {items[active].content}
                </div>
            }
        </div>
    );
}

export default AccountTabs;