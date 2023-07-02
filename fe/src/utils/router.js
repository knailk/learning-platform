import LearningPage from '../pages/user/LearningPage';
import PracticePage from '../pages/user/PracticePage';
import RankingPage from '../pages/user/RankingPage';
import MissionPage from '../pages/user/MissionPage';
import StorePage from '../pages/user/StorePage';
import ProfilePage from '../pages/user/ProfilePage';
export const ROUTERS = {
    MENU_NAV_BAR: [
        {
            title: 'Learning',
            path: '/',
            component: <LearningPage />,
        },
        {
            title: 'Practice',
            path: '/practice',
            component: <PracticePage />,
        },
        {
            title: 'Ranking',
            path: '/ranking',
            component: <RankingPage />,
        },
        {
            title: 'Mission',
            path: '/mission',
            component: <MissionPage />,
        },
        {
            title: 'Store',
            path: '/store',
            component: <StorePage />,
        },
        {
            title: 'Profile',
            path: '/profile',
            component: <ProfilePage />,
        },
    ],
};
