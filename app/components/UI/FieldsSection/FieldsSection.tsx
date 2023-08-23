import React, {FC, forwardRef, InputHTMLAttributes, ReactNode} from 'react';
import styles from './FieldsSection.module.scss';
import {FieldError} from "react-hook-form";

interface FieldsSectionProps {
    children?: ReactNode,
    title?: string
}

const FieldsSection: FC<FieldsSectionProps> = ({children, title}) => {
    return (
        <div className={styles.item}>
            {title && <div className={styles.title}>{title}</div>}
            <div className={styles.items}>{children}</div>
        </div>
    )
}

export default FieldsSection;