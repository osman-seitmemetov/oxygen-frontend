import { FC } from "react";
import style from './Notifications.module.scss';
import NotificationsItem from "./NotificationsItem/NotificationsItem";
import Account from "@/components/Account/Account";
// import {useAppSelector} from "@/hooks/redux";
import AccountEmpty from "@/components/Account/AccountEmpty/AccountEmpty";
import PictureNotificationsEmpty from "@/components/pictures/PictureNotificationsEmpty";
import {ITabItem} from "@/webpages/Promocodes/Promocodes";
import AccountTabs from "@/components/Account/AccountTabs/AccountTabs";
import AccountItems from "@/components/Account/AccountItems/AccountItems";
import {useNotifications} from "@/webpages/Notifications/useNotifications";

const Notifications: FC = () => {
    const {notifications, isLoading} = useNotifications()

    const tabItems: ITabItem[] = [
        {
            title: 'Новые уведомления',
            content: notifications && notifications.data.filter(notification => !notification.read).length > 0
                ? <AccountItems>
                    {notifications.data.filter(notification => !notification.read).map(notification =>
                        <NotificationsItem key={notification.id} notification={notification}/>
                    )}
                </AccountItems>
                : <AccountEmpty title="У вас нет новых уведомлений">
                    <PictureNotificationsEmpty />
                </AccountEmpty>
        },
        {
            title: 'Прочитанные уведомления',
            content: notifications && notifications.data.filter(notification => notification.read).length > 0
                ? <AccountItems>
                    {notifications.data.filter(notification => notification.read).map(notification =>
                        <NotificationsItem key={notification.id} notification={notification}/>
                    )}
                </AccountItems>
                : <AccountEmpty title="У вас нет прочитанных уведомлений">
                    <PictureNotificationsEmpty />
                </AccountEmpty>
        }
    ];

    return (
        <Account title="Уведомления">
            <div className={style.notifications}>
                <AccountTabs items={tabItems} />
            </div>
        </Account>
    );
}

export default Notifications;