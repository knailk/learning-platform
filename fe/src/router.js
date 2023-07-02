import { ROUTERS as CONST_ROUTERS } from './utils/router';
import { Route, Routes } from 'react-router-dom';
import MasterLayout from './pages/theme/MasterLayout';
import LearningPage from './pages/user/LearningPage';
import PracticePage from './pages/user/PracticePage';
import RankingPage from './pages/user/RankingPage';
import MissionPage from './pages/user/MissionPage';
import StorePage from './pages/user/StorePage';
import ProfilePage from './pages/user/ProfilePage';

const renderUserRouter = () => {
    const userRouter = [
        {
            path: CONST_ROUTERS.USER.LEARNING,
            component: <LearningPage />,
        },
        {
            path: CONST_ROUTERS.USER.PRACTICE,
            component: <PracticePage />,
        },
        {
            path: CONST_ROUTERS.USER.RANKING,
            component: <RankingPage />,
        },
        {
            path: CONST_ROUTERS.USER.MISSION,
            component: <MissionPage />,
        },
        {
            path: CONST_ROUTERS.USER.STORE,
            component: <StorePage />,
        },
        {
            path: CONST_ROUTERS.USER.PROFILE,
            component: <ProfilePage />,
        },
    ];
    return (
        <MasterLayout>
            <Routes>
                {userRouter.map((item, key) => {
                    return <Route key={key} path={item.path} element={item.component} />;
                })}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;
