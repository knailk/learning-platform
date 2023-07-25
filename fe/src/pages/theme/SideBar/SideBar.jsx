import React, { memo } from "react";
import style from "./style.module.scss";
import ItemSideBar from "./ItemSideBar";
import { ROUTERS } from "../../../utils/router";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  return (
    <>
      <div className={style.sideBar}>
        <div className={style.logo}>LOGO</div>
        <div className="nav"></div>
        <div className="navbar">
          {ROUTERS.MENU_NAV_BAR.map((item, index) => {
            return (
              <ItemSideBar
                key={index}
                title={item.title}
                url={item.path}
                isActive={item.path === location.pathname}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(SideBar);
