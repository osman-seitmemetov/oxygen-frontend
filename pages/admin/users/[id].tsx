import type {GetStaticPaths} from 'next'
import {GetStaticProps} from "next";
import Header, {headerTypes} from "@/components/Header/Header";
import AdminUser from "@/webpages/AdminUser/AdminUser";
import {IUser} from "@/models/IUser";
import {UserService} from "@/services/UserService";
import {NextPageAuth} from "@/types/authProvider";
import {useRouter} from "next/router";


const AdminUserPage: NextPageAuth = () => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className="main">
            <AdminUser />
        </div>
    )
}

AdminUserPage.isOnlyAdmin = true;

export default AdminUserPage;