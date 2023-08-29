import clsx from "clsx";
import React, { memo, useEffect, useState } from "react";
import style from "./style.module.scss";
import { Row, Col } from "antd";
import LearningPath from "./LearningPath";
import RankingBox from "./RankingBox";
import MissionBox from "./MissionBox";
const LearningPage = () => {
    const [chapters, setChapters] = useState([]);
    useEffect(() => {
        fetch(
            "http://ec2-3-0-139-245.ap-southeast-1.compute.amazonaws.com:8080/v1/chapters",
        )
            .then((res) => res.json())
            .then((json) => {
                setChapters(json.data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className={clsx(style.content)}>
            <Row className={style.wrapper}>
                <Col sm={24} lg={16} className={style.learningPathWrapper}>
                    {chapters.map((element) => (
                        <LearningPath key={element.id} data={element} />
                    ))}
                </Col>
                <Col lg={8} className={style.boxWrapper}>
                    <div className={style.fixedBox}>
                        <RankingBox />
                        <MissionBox />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default memo(LearningPage);
