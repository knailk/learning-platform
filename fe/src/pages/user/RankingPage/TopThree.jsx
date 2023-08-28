import React, { memo } from "react";
import style from "./style.module.scss";
import { Row, Col } from "antd";
import AvatarCpn from "../../../components/Avatar";

const TopThree = ({ ...props }) => {
    const data = props.data;
    return (
        <>
            <Col order={2} span={8}>
                <Row>
                    <div className={style.topOneWrapper}>
                        <img
                            className={style.topOneIcon}
                            src="images/winner.png"
                            alt="winner"
                        />
                        <AvatarCpn
                            src={data[0].avatar}
                            fullName={data[0].name}
                            size={200}
                            style={{
                                position: "inherit",
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <h1>{data[0].name}</h1>
                </Row>
                <Row>
                    <h1>{data[0].score} Điểm</h1>
                </Row>
            </Col>
            <Col order={1} span={6}>
                <Row align={"bottom"} style={{ height: "250px" }}>
                    <div className={style.topTwoWrapper}>
                        <img
                            className={style.topTwoIcon}
                            src="images/second.png"
                            alt="winner"
                        />
                        <AvatarCpn
                            src={data[1].avatar}
                            fullName={data[1].name}
                            size={150}
                            style={{
                                position: "inherit",
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <h1>{data[1].name}</h1>
                </Row>
                <Row>
                    <h1>{data[1].score} Điểm</h1>
                </Row>
            </Col>
            <Col order={3} span={6}>
                <Row align={"bottom"} style={{ height: "250px" }}>
                    <div className={style.topTwoWrapper}>
                        <img
                            className={style.topTwoIcon}
                            src="images/third.png"
                            alt="winner"
                        />
                        <AvatarCpn
                            src={data[2].avatar}
                            fullName={data[2].name}
                            size={150}
                            style={{
                                position: "inherit",
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <h1>{data[2].name}</h1>
                </Row>
                <Row>
                    <h1>{data[2].score} Điểm</h1>
                </Row>
            </Col>
        </>
    );
};

export default memo(TopThree);
