import {FC, ReactNode} from "react";
import style from './AccountItems.module.scss';


interface AccountItemsProps {
    children?: ReactNode
}

const AccountItems: FC<AccountItemsProps> = ({children}) => {
    return (
        <div className={style.items}>
            {children}
        </div>
    );
}

export default AccountItems;