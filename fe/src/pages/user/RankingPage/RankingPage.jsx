import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import TopThree from './TopThree';
import OtherTop from './OtherTop';
import GameBox from './GameBox';
import UserRanking from './UserRanking';
const RankingPage = () => {
    return (
        <div className={style.content}>
            <Col>
                <Row>
                    <div className={style.rankingTitle}>BẢNG XẾP HẠNG</div>
                </Row>
                <Row className={style.topThreeWrapper} align={'top'} justify={'center'}>
                    <TopThree />
                </Row>
                <Row className={style.otherTopWrapper} justify={'space-between'}>
                    <Col span={11}>
                        <OtherTop avatar="images/avatar1.jpg" />
                        <OtherTop avatar="images/avatar2.jpg" />
                        <OtherTop avatar="images/avatar3.jpg" />
                        <OtherTop avatar="images/avatar4.jpg" />
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
