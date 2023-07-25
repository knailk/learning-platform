import React, { memo } from "react";
import { Row, Col } from "antd";
import PersionalInfomation from "./PersionalInfomation";
import Statistical from "./Statistical/Statistical";
import Achievement from "./Achievement/Achievement";
import Friend from "./Friend/Friend";
import common_style from "./style.module.scss";

const Profile = () => {
  return (
    <div className={common_style.content}>
      <Row style={{ width: "100%" }}>
        <PersionalInfomation />
      </Row>
      <Row>
        <Col span={16}>
          <Row>
            <Statistical />
          </Row>
          <Row>
            <Achievement />
          </Row>
        </Col>
        <Col span={8}>
          <Friend showTittle={true} />
        </Col>
      </Row>
    </div>
  );
};

export default memo(Profile);
