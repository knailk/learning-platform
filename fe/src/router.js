import { ROUTERS as CONST_ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/theme/MasterLayout";
const renderUserRouter = () => {
  return (
    <Routes>
      {CONST_ROUTERS.MENU_NAV_BAR.map((item, index) => {
        if (item.title === "login" || item.title === "register") {
          return (
            <Route key={index} path={item.path} element={item.component} />
          );
        } else
          return (
            <MasterLayout>
              <Route key={index} path={item.path} element={item.component} />
            </MasterLayout>
          );
      })}
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
