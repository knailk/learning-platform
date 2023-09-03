import React from 'react';
import LearningPage from '../pages/user/LearningPage';
import PracticePage from '../pages/user/PracticePage';
import RankingPage from '../pages/user/RankingPage';
import ConfirmRegisterPage from '../pages/user/ConfirmRegisterPage';
import ProfilePage from '../pages/user/ProfilePage';
import ForgotPasswordPage from '../pages/user/ForgotPasswordPage';
import NewPasswordPage from '../pages/user/NewPasswordPage';
import MasterLayout from '../pages/theme/MasterLayout';

export const ROUTERS = {
    MENU_NAV_BAR: [
        {
            title: 'HỌC',
            path: '/',
            component: <LearningPage />,
            layout: MasterLayout,
            inMenu: true,
            img: 'images/learning.png',
        },
        {
            title: 'LUYỆN TẬP',
            path: '/practice',
            component: <PracticePage />,
            layout: MasterLayout,
            inMenu: true,
            img: 'images/practice.png',
        },
        {
            title: 'XẾP HẠNG',
            path: '/ranking',
            component: <RankingPage />,
            layout: MasterLayout,
            inMenu: true,
            img: 'images/ranking.png',
        },
        // {
        //   title: "GAME",
        //   path: "/game",
        //   component: <GamePage />,
        //   layout: MasterLayout,
        //   inMenu: true,
        // },
        {
            title: 'HỒ SƠ',
            path: '/profile',
            component: <ProfilePage />,
            layout: MasterLayout,
            inMenu: true,
            img: 'images/profile.png',
        },
        {
            title: 'Xác nhận đăng ký',
            path: '/confirm-register',
            component: <ConfirmRegisterPage />,
            layout: null,
            inMenu: false,
            img: '',
        },
        {
            title: 'Quên mật khẩu',
            path: '/forgot-password',
            component: <ForgotPasswordPage />,
            layout: null,
            inMenu: false,
            img: '',
        },
        {
            title: 'Mật khẩu mới',
            path: '/new-password',
            component: <NewPasswordPage />,
            layout: null,
            inMenu: false,
            img: '',
        },
        // {
        //   title: "LOGIN",
        //   path: "/login",
        //   component: <LoginPage />,
        //   layout: null,
        //   inMenu: false,
        // },
        // {
        //   title: "REGISTER",
        //   path: "/register",
        //   component: <RegisterPage />,
        //   layout: null,
        //   inMenu: false,
        // },
    ],
};
