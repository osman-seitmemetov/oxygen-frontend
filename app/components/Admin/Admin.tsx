import {FC, ReactNode} from "react";
import styles from './Admin.module.scss';
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import AdminHeader from "@/components/Admin/AdminHeader/AdminHeader";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


interface AdminProps {
    children?: ReactNode,
    title: string,
    isLoading?: boolean
}

const Admin: FC<AdminProps> = ({children, title, isLoading}) => {
    return (
        <section className={styles.admin}>
            <AdminHeader/>
            <div style={{display: "flex", padding: "0 15px"}}>
                <AdminSidebar/>
                <div className={styles.content}>
                    {
                        isLoading
                            ? <SkeletonLoader
                                style={{
                                    marginBottom: 20,
                                    height: 52,
                                    width: '60%',
                                    borderRadius: 12
                                }}
                            />
                            : <h1 className={styles.title}>Панель администратора {title}</h1>
                    }
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Admin;