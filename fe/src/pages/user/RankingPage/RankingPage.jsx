import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import TopThree from './TopThree';
import OtherTop from './OtherTop';
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
                <Row className={style.otherTopWrapper} gutter={[16, 10]}>
                    <OtherTop />
                    <OtherTop />
                    <OtherTop />
                    <OtherTop />
                    <OtherTop />
                    <OtherTop />
                    <OtherTop />
                    <OtherTop />
                </Row>
            </Col>
        </div>
    );
};

export default memo(RankingPage);
