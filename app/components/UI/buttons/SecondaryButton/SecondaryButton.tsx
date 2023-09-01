import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from 'react';
import style from './SecondaryButton.module.scss';
import Link from "next/link";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    link?: string
}

const SecondaryButton: FC<IButton & AnchorHTMLAttributes<HTMLAnchorElement>> = (
    {
        className,
        link,
        children,
        ...rest
    }
) => {
    return (
        <>
            {link
                ? <Link {...rest} href={link} className={`${className} ${style.button}`}>
                    {children}
                </Link>
                : <button {...rest} className={`${className} ${style.button}`}>{children}</button>
            }
        </>
    );
}

export default SecondaryButton;