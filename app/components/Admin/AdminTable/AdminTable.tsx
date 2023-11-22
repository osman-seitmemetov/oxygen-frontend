import {FC, useState} from 'react'
import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader/AdminTableHeader'
import AdminTableItem from './AdminTableItem/AdminTableItem'
import {ITableItem} from "@/models/ITableItem";
import AdminTableLoader from "@/components/Admin/AdminTable/AdminTableLoader/AdminTableLoader";

interface AdminTableProps {
    tableItems: ITableItem[]
    headerItems: string[]
    removeHandler: (id: number) => void,
    isLoading?: boolean
}

const AdminTable: FC<AdminTableProps> = ({tableItems, headerItems, isLoading, removeHandler}) => {
    const [activeModal, setActiveModal] = useState(false);

    return (
        <table className={styles.table}>
            <AdminTableHeader headerItems={headerItems}/>

            {
                isLoading
                    ? <AdminTableLoader/>
                    : tableItems.length
                        ? tableItems.map((tableItem) => (
                            <AdminTableItem
                                setActiveModal={setActiveModal}
                                activeModal={activeModal}
                                key={tableItem.id}
                                tableItem={tableItem}
                                removeHandler={() => removeHandler(tableItem.id)}
                            />
                        )) :
                        <div className={styles.notFound}>Ничего не найдено</div>
            }
        </table>
    )
}

export default AdminTable
