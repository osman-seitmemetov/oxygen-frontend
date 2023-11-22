import React, {FC} from "react";
import Account from "@/components/Account/Account";
import ThemeButton from "@/components/ThemeButton/ThemeButton";


const Settings: FC = () => {
    return (
        <Account isRenderDesktopTitle title="Настройки">
            Тема:<ThemeButton/>
        </Account>
    );
}

export default Settings;