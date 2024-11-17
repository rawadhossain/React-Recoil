import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import {
    jobsAtom,
    messagingAtom,
    networkAtom,
    notificationsAtom,
} from './atoms';

export default function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

function MainApp() {
    // useRecoilValie => read the value of a Recoil atom or selector without subscribing to changes in it.
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const notificationsAtomCount = useRecoilValue(notificationsAtom);

    //useRecoilState => read and write the value of a Recoil atom.
    const [messagingAtomCount, setMessagingAtomCount] =
        useRecoilState(messagingAtom);
    const TotalNotificationCount = useRecoilValue(TotalNotificationSelector);

    return (
        <>
            <button>Home</button>

            <button>
                My network (
                {networkNotificationCount >= 100
                    ? '99+'
                    : networkNotificationCount}
                )
            </button>
            <button>Jobs {jobsAtomCount}</button>
            <button onClick={() => setMessagingAtomCount((c) => c + 1)}>
                Messaging ({messagingAtomCount})
            </button>
            <button>Notifications ({notificationsAtomCount})</button>

            <button>Me ({totalNotificationCount})</button>
        </>
    );
}
