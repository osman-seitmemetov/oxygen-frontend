import AdminTableItemActions
    from '@/components/Admin/AdminTable/AdminTableItem/AdminTableItemActions/AdminTableItemActions'
import React, {FC} from 'react'
import styles from './AdminTableItem.module.scss'
import Modal from "@/UI/modals/Modal/Modal";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/UI/buttons/SecondaryButton/SecondaryButton";
import {ITableItem} from "@/models/ITableItem";


interface AdminTableItemProps {
    tableItem: ITableItem,
    removeHandler: () => void,
    setActiveModal: (activeModal: boolean) => void,
    activeModal: boolean
}

const AdminTableItem: FC<AdminTableItemProps> = ({tableItem, removeHandler, setActiveModal, activeModal}) => {
    console.log("__ID__", tableItem.id);
    console.log("__TYPE_ID__", typeof tableItem.id);

    const onAgreeClickHandler = () => {
        setActiveModal(false);
        removeHandler();
    }

    return (
        <>
            <tr className={styles.item}>
                {tableItem.items.map((cell) =>
                    <>
                        {
                            cell.type === "STRING"
                                ? <td key={cell.value}>{cell.value}</td>
                                : cell.type === "IMAGE"
                                && <td>
                                    <img
                                        className={styles.img}
                                        alt={`${cell.value}`}
                                        src={`http://localhost:5000/${cell.value}`}
                                        width={100}
                                        height={60}
                                    />
                                </td>
                        }
                    </>
                )}

                <td>
                    <AdminTableItemActions
                        editUrl={tableItem.editUrl}
                        setActiveModal={setActiveModal}
                        removeHandler={removeHandler}
                    />
                </td>
            </tr>

            <tr className={styles.margin}></tr>

            <Modal
                title="Вы точно хотите удалить этого пользователя?"
                active={activeModal}
                setActive={setActiveModal}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: '100%'
                    }}
                >
                    <PrimaryButton
                        // onClick={() => {
                        //     removeHandler(tableItem.id);
                        //     setActiveModal(false);
                        // }}
                        onClick={onAgreeClickHandler}
                        style={{width: '48%'}}
                    >
                        Да
                    </PrimaryButton>

                    <SecondaryButton
                        onClick={() => setActiveModal(false)}
                        style={{width: '48%'}}
                    >
                        Нет
                    </SecondaryButton>
                </div>
            </Modal>
        </>
    )
}

export default AdminTableItem
