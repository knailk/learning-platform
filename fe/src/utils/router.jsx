import LearningPage from "../pages/user/LearningPage";
import PracticePage from "../pages/user/PracticePage";
import RankingPage from "../pages/user/RankingPage";
import GamePage from "../pages/user/GamePage/GamePage";
import ProfilePage from "../pages/user/ProfilePage";
import MasterLayout from "../pages/theme/MasterLayout";

export const ROUTERS = {
  MENU_NAV_BAR: [
    {
      title: "LEARNING",
      path: "/",
      component: <LearningPage />,
      layout: MasterLayout,
      inMenu: true,
    },
    {
      title: "PRACTICE",
      path: "/practice",
      component: <PracticePage />,
      layout: MasterLayout,
      inMenu: true,
    },
    {
      title: "RANKING",
      path: "/ranking",
      component: <RankingPage />,
      layout: MasterLayout,
      inMenu: true,
    },
    {
      title: "GAME",
      path: "/game",
      component: <GamePage />,
      layout: MasterLayout,
      inMenu: true,
    },
    {
      title: "PROFILE",
      path: "/profile",
      component: <ProfilePage />,
      layout: MasterLayout,
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
