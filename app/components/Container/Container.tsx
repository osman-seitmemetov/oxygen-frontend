import {FC, ReactElement, ReactNode} from "react";
import style from './Container.module.scss';

interface IContainer {
    className?: string,
    children: ReactNode
}

const Container: FC<IContainer> = ({ className, children }) => {
    return (
        <div className={`${className} ${style.container}`}>{children}</div>
    );
}

export default Container;