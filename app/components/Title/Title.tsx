import {FC, ReactNode} from "react"
import style from "./Title.module.scss"

interface ITitle {
    className?: string,
    children: ReactNode
}

const Title: FC<ITitle> = ({ className, children }) => {
    return (
        <>
            <h1 className={`${style.title} ${className}`}>{children}</h1>
        </>
    );
}

export default Title;