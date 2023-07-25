import clsx from "clsx";
import React, { memo } from "react";
import style from "./style.module.scss";
const PracticePage = () => {
  return <div className={clsx(style.content)}>PracticePage</div>;
};

export default memo(PracticePage);
