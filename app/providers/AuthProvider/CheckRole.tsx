import {FC} from "react";
import {TypeComponentAuthFields} from "@/types/authProvider";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/router";
import Error404 from "../../../pages/404";

const CheckRole: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyAdmin, isOnlyUser}}) => {
    const {user} = useAuth();
    const router = useRouter();

    const Children = () => <>{children}</>

    if(user?.role === "ADMIN") return <Children />

    if(isOnlyAdmin) {
        return <Error404/>
    }

    const isUser = user && user.role !== "ADMIN";
    if(isUser && isOnlyUser) return <Children />
    else {
        router.pathname !== '/login' && router.replace('/login');
        return null;
    }
};

export default CheckRole;