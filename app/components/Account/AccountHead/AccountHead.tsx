import {FC} from "react";


const AccountHead: FC = () => {
    return (
        <div className="account-tabs-area">
            <div className="account-head">
                <div className="account-head__tabs">
                    <button type="button" className="account-head__tab account-head__tab--active">По&shy;пол&shy;нить ба&shy;ланс</button>
                    <button type="button" className="account-head__tab">Исто&shy;рия тран&shy;зак&shy;ций</button>
                </div>
            </div>

            <div className="account-tab-content account-tab-content--active animated animate__fadeIn">

            </div>

            <div className="account-tab-content">

            </div>
        </div>
    );
}

export default AccountHead;