import { selector } from 'recoil';
import { notificationsAtom } from './atoms';

export const notifications = atom({
    key: 'networkAtom',
    default: selector({
        key: 'networkAtomSelector', // Unique identifier for the selector.
        get: async ({ get }) => {
            const response = await axios.get(
                'https://sum-server.100xdevs.com/notifications',
            );

            return response.data;
        },
    }),
});

export const TotalNotificationSelector = selector({
    key: 'TotalNotificationSelector',
    get: ({ get }) => {
        const allNotifications = get(notifications);
        return (
            allNotifications.network +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications.messaging
        );
    },
});