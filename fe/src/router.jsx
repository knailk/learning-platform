import React, { Fragment } from 'react';
import { ROUTERS as CONST_ROUTERS } from './utils/router';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import LoginPage from './pages/user/LoginPage';
import RegisterPage from './pages/user/RegisterPage';
import ConfirmRegisterPage from './pages/user/ConfirmRegisterPage';
import ForgotPasswordPage from './pages/user/ForgotPasswordPage';
import NewPasswordPage from './pages/user/NewPasswordPage';

const cookies = new Cookies();

function PrivateRoute({ children, path }) {
  const isLogin = cookies.get('is_login');

  if (!isLogin) {
      return <Navigate to="/login" />;
  }
  
  return children;
}
const RouterCustom = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/confirm-register" element={<ConfirmRegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/new-password" element={<NewPasswordPage />} />
            {CONST_ROUTERS.MENU_NAV_BAR.map((item, index) => {
                let Layout = item?.layout === null ? Fragment : item?.layout;
                return (
                    <Route
                        key={index}
                        path={item.path}
                        element={
                            <PrivateRoute path={item.path}>
                                <Layout>{item.component}</Layout>
                            </PrivateRoute>
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default RouterCustom;
