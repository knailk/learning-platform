import { ROUTERS as CONST_ROUTERS } from './utils/router';
import HomePage from './pages/user/HomePage';
import { Route, Routes } from 'react-router-dom';
import MasterLayout from './pages/theme/MasterLayout';
import Profile from './pages/user/Profile';

const renderUserRouter = () => {
    const userRouter = [
        {
            path: CONST_ROUTERS.USER.HOME,
            component: <HomePage />,
        },
        {
            path: CONST_ROUTERS.USER.PROFILE,
            component: <Profile />,
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
