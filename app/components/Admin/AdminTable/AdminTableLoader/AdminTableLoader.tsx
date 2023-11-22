import React, {FC} from 'react'
import styles from './AdminTableLoader.module.scss'
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


interface AdminTableItemProps {
}

const AdminTableLoader: FC<AdminTableItemProps> = () => {
    return (
        <>
            <tr className={styles.item}><td colSpan={88}><SkeletonLoader height={56} borderRadius={10}/></td></tr>
            <tr className={styles.margin}></tr>

            <tr className={styles.item}><td colSpan={88}><SkeletonLoader height={56} borderRadius={10}/></td></tr>
            <tr className={styles.margin}></tr>

            <tr className={styles.item}><td colSpan={88}><SkeletonLoader height={56} borderRadius={10}/></td></tr>
            <tr className={styles.margin}></tr>

            <tr className={styles.item}><td colSpan={88}><SkeletonLoader height={56} borderRadius={10}/></td></tr>
            <tr className={styles.margin}></tr>

            <tr className={styles.item}><td colSpan={88}><SkeletonLoader height={56} borderRadius={10}/></td></tr>
            <tr className={styles.margin}></tr>
        </>
    )
}

export default AdminTableLoader
