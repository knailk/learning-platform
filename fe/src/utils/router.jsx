import React from 'react';
import LearningPage from '../pages/user/LearningPage';
import PracticePage from '../pages/user/PracticePage';
import RankingPage from '../pages/user/RankingPage';
import ProfilePage from '../pages/user/ProfilePage';
import MasterLayout from '../pages/theme/MasterLayout';
import LecurePractice from 'pages/user/PracticePage/PracticeComponent/LecurePractice';
import { SIDEBAR_TYPE } from './constant';
import CodePractice from 'pages/user/CodePracticePage/CodePracticePage';
import GameCodePage from 'pages/user/GameCodePage/GameCodePage';
import GameLevel from 'pages/user/GameCodePage/GameLevel/GameLevel';

export const ROUTERS = {
    MENU_NAV_BAR: [
        {
            title: 'HỌC',
            path: '/',
            component: <LearningPage />,
            layout: MasterLayout,
            inMenu: true,
            img: '/images/learning.png',
            type: SIDEBAR_TYPE.SIDEBAR,
        },
        {
            title: 'LUYỆN TẬP',
            path: '/practice',
            component: <PracticePage />,
            layout: MasterLayout,
            inMenu: true,
            img: '/images/practice.png',
            type: SIDEBAR_TYPE.SIDEBAR,
        },
        {
            title: 'XẾP HẠNG',
            path: '/ranking',
            component: <RankingPage />,
            layout: MasterLayout,
            inMenu: true,
            img: '/images/ranking.png',
            type: SIDEBAR_TYPE.SIDEBAR,
        },
        {
            title: 'HỒ SƠ',
            path: '/profile',
            component: <ProfilePage />,
            layout: MasterLayout,
            inMenu: true,
            img: '/images/profile.png',
            type: SIDEBAR_TYPE.SIDEBAR,
        },
        // {
        //     title: 'Xác nhận đăng ký',
        //     path: '/confirm-register',
        //     component: <ConfirmRegisterPage />,
        //     layout: null,
        //     inMenu: false,
        //     img: '',
        //     type: SIDEBAR_TYPE.NOTSIDEBAR,
        // },
        // {
        //     title: 'Quên mật khẩu',
        //     path: '/forgot-password',
        //     component: <ForgotPasswordPage />,
        //     layout: null,
        //     inMenu: false,
        //     img: '',
        //     type: SIDEBAR_TYPE.NOTSIDEBAR,
        // },
        // {
        //     title: 'Mật khẩu mới',
        //     path: '/new-password',
        //     component: <NewPasswordPage />,
        //     layout: null,
        //     inMenu: false,
        //     img: '',
        //     type: SIDEBAR_TYPE.MORE,
        // },
        {
            title: '',
            path: '/practice/:lesson_id',
            component: <LecurePractice />,
            layout: MasterLayout,
            inMenu: false,
            img: '',
            type: SIDEBAR_TYPE.NOTSIDEBAR,
        },
        {
            title: 'ĐĂNG XUẤT',
            path: '/logout',
            component: <></>,
            layout: MasterLayout,
            inMenu: false,
            img: '',
            type: SIDEBAR_TYPE.MORE,
        },
        {
            title: 'TRÒ CHƠI',
            path: '/play/map',
            component: <GameCodePage />,
            layout: null,
            inMenu: true,
            img: '/images/game_sidebar.png',
            type: SIDEBAR_TYPE.SIDEBAR,
        },
        {
            title: 'LUYỆN TƯ DUY',
            path: '/code-practice',
            component: <CodePractice />,
            layout: null,
            inMenu: true,
            img: '/images/code_sidebar.png',
            type: SIDEBAR_TYPE.SIDEBAR,
        },

        {
            title: '',
            path: '/practice/:lesson_id',
            component: <LecurePractice />,
            layout: MasterLayout,
            inMenu: false,
            img: '',
            type: SIDEBAR_TYPE.NOTSIDEBAR,
        },
        {
            title: '',
            path: '/play/level/:level',
            component: <GameLevel />,
            layout: null,
            inMenu: true,
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
