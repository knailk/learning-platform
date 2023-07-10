import LearningPage from '../pages/user/LearningPage';
import PracticePage from '../pages/user/PracticePage';
import RankingPage from '../pages/user/RankingPage';
import MissionPage from '../pages/user/MissionPage';
import StorePage from '../pages/user/StorePage';
import ProfilePage from '../pages/user/ProfilePage';
export const ROUTERS = {
    MENU_NAV_BAR: [
        {
            title: 'LEARNING',
            path: '/',
            component: <LearningPage />,
        },
        {
            title: 'PRACTICE',
            path: '/practice',
            component: <PracticePage />,
        },
        {
            title: 'RANKING',
            path: '/ranking',
            component: <RankingPage />,
        },
        {
            title: 'MISSION',
            path: '/mission',
            component: <MissionPage />,
        },
        {
            title: 'STORE',
            path: '/store',
            component: <StorePage />,
        },
        {
            title: 'PROFILE',
            path: '/profile',
            component: <ProfilePage />,
        },
    ],
};
