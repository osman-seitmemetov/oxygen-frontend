import {FC, ReactNode} from "react";
import style from './SideNavbar.module.scss';


interface SideNavbarProps {
    children?: ReactNode
}

const SideNavbar: FC<SideNavbarProps> = ({children}) => {
    return (
        <aside className={style.sidebar}>
            <nav className={style.nav}>
                {children}
            </nav>
        </aside>
    );
}

export default SideNavbar;