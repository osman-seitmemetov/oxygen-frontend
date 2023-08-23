import type {NextPage} from 'next'
import Header, {headerTypes} from "@/components/Header/Header";
import Registration from "@/webpages/Registration/Registration";
import Meta from "@/lib/Meta/Meta";

const RegistrationPage: NextPage = () => {
    return (
        <Meta title="Регистрация">
            <Header type={headerTypes.auth}/>
            <div className="main">
                <Registration />
            </div>
        </Meta>
    )
}

export default RegistrationPage;