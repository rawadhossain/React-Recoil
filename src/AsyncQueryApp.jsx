import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notifications, totalNotificationSelector } from './atoms';

function MainApp() {
    // Access the notifications atom with `useRecoilState`
    const [networkCount, setNetworkCount] = useRecoilState(notifications);

    // Access the derived state using the selector with `useRecoilValue`
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

    return (
        <div>
            <h1>Notification Dashboard</h1>
            <button>Home</button>

            <button>
                My Network:{' '}
                {networkCount.network >= 100 ? '99+' : networkCount.network}
            </button>
            <button>Jobs: {networkCount.jobs}</button>
            <button>Messaging: {networkCount.messaging}</button>
            <button>Notifications: {networkCount.notifications}</button>

            <button>Me (Total): {totalNotificationCount}</button>
        </div>
    );
}

// Wrap the application in RecoilRoot to enable Recoil state management
export default function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}
