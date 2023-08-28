import React, { memo } from "react";
import style from "./style.module.scss";
import { Row, Col } from "antd";
import TopThree from "./TopThree";
import OtherTop from "./OtherTop";
import GameBox from "./GameBox";
import UserRanking from "./UserRanking";

const DATA = [
    {
        avatar: "images/avatar1.jpg",
        name: "Trần Minh Toàn",
        score: 1000,
    },
    {
        avatar: "images/avatar2.jpg",
        name: "Nguyễn Danh Tiến Dũng",
        score: 150,
    },
    {
        avatar: "images/avatar3.jpg",
        name: "Trần Quyết Thắng",
        score: 120,
    },
    {
        avatar: "images/avatar4.jpg",
        name: "Trần Việt Cường",
        score: 350,
    },
    {
        avatar: "",
        name: "Trần Trường Sinh",
        score: 600,
    },
    {
        avatar: "images/avatar2.jpg",
        name: "Lê Quốc Vũ",
        score: 50,
    },
    {
        avatar: "",
        name: "Trần Việt Cường",
        score: 350,
    },
    {
        avatar: "images/avatar1.jpg",
        name: "Nguyễn Tuấn Long",
        score: 600,
    },
    {
        avatar: "",
        name: "Lê Quốc Vũ",
        score: 50,
    },
];

const RankingPage = () => {
    DATA.sort((a, b) => b.score - a.score);
    return (
        <div className={style.content}>
            <Col>
                <Row>
                    <div className={style.rankingTitle}>BẢNG XẾP HẠNG</div>
                </Row>
                <Row
                    className={style.topThreeWrapper}
                    align={"top"}
                    justify={"center"}
                >
                    <TopThree data={DATA.slice(0, 3)} />
                </Row>
                <Row
                    className={style.otherTopWrapper}
                    justify={"space-between"}
                >
                    <Col span={11}>
                        {DATA.slice(3).map((item, index) => {
                            return <OtherTop item={item} index={index+4} />;
                        })}
                    </Col>
                    <Col span={11}>
                        <UserRanking />
                        <GameBox />
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default memo(RankingPage);
