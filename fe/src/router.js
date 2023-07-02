import { ROUTERS as CONST_ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/theme/MasterLayout";
const renderUserRouter = () => {
  return (
    <>
      {CONST_ROUTERS.MENU_NAV_BAR.map((item, index) => {
        if (item.title === "login" || item.title === "register") {
          return (
            <Routes>
              <Route key={index} path={item.path} element={item.component} />
            </Routes>
          );
        } else
          return (
            <MasterLayout>
              <Routes>
                <Route key={index} path={item.path} element={item.component} />
              </Routes>
            </MasterLayout>
          );
      })}
    </>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
