import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Login from "@/webpages/Login/Login";
import Meta from "@/lib/Meta/Meta";

const LoginPage: NextPage = () => {
    return (
        <Meta title="Вход">
            <Header type={headerTypes.auth}/>
            <div className="main">
                <Login />
            </div>
        </Meta>
    )
}

export default LoginPage;