import { Fragment } from "react";
import { ROUTERS as CONST_ROUTERS } from "./utils/router";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";

function PrivateRoute({ children }) {
  const { isLogin } = useAuth();
  console.log("isLogin", isLogin);
  console.log("children", children);

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
      {CONST_ROUTERS.MENU_NAV_BAR.map((item, index) => {
        let Layout = item?.layout === null ? Fragment : item?.layout;
        return (
          <Route
            key={index}
            path={item.path}
            element={
              <PrivateRoute>
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
