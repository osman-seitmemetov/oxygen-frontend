import cn from 'classnames'
import {FC} from 'react'
import styles from './AdminTableHeader.module.scss'


const AdminTableHeader: FC<{ headerItems: string[] }> = ({headerItems}) => {
    return (
        <tr className={cn(styles.item, styles.header)}>
            {headerItems.map((value) => (
                <td key={value}>{value}</td>
            ))}

            <td>Действия</td>
        </tr>
    )
}

export default AdminTableHeader
