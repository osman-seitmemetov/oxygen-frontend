import {FC, ReactNode} from "react";
import cn from "classnames";
import style from './SideNavbarItem.module.scss';
import NavLink from "@/components/NavLink/NavLink";


interface SideNavbarItemProps {
    href: string,
    className?: string,
    activeClassName?: string,
    children?: ReactNode
}

const SideNavbarItem: FC<SideNavbarItemProps> = ({href, children, className, activeClassName}) => {
    return (
        <NavLink
            exact
            href={href}
            className={cn(style.link, className)}
            activeClassName={cn(style.link_active, activeClassName)}
        >
            {children}
        </NavLink>
    );
}

export default SideNavbarItem;