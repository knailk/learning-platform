import { ROUTERS as CONST_ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/theme/MasterLayout";
import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";
const renderUserRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {CONST_ROUTERS.MENU_NAV_BAR.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            element={<MasterLayout>{item.component}</MasterLayout>}
          />
        );
      })}
      {/* </Route> */}
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
