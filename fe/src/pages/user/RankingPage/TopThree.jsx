import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
const TopThree = () => {
    return (
        <>
            <Col order={2} span={8}>
                <Row>
                    <div className={style.topOneWrapper}>
                        <img className={style.topOneIcon} src="images/winner.png" alt="winner" />
                        <img alt="Minh Toàn" src="images/avatar1.jpg" />
                    </div>
                </Row>
                <Row>
                    <h1>Trần Minh Toàn</h1>
                </Row>
                <Row>
                    <h1>1200 Điểm</h1>
                </Row>
            </Col>
            <Col order={1} span={6}>
                <Row align={'bottom'} style={{ height: '250px' }}>
                    <div className={style.topTwoWrapper}>
                        <img className={style.topTwoIcon} src="images/second.png" alt="winner" />
                        <img alt="Minh Toàn" src="images/avatar2.jpg" />
                    </div>
                </Row>
                <Row>
                    <h1>Trần Minh Toàn</h1>
                </Row>
                <Row>
                    <h1>1200 Điểm</h1>
                </Row>
            </Col>
            <Col order={3} span={6}>
                <Row align={'bottom'} style={{ height: '250px' }}>
                    <div className={style.topTwoWrapper}>
                        <img className={style.topTwoIcon} src="images/third.png" alt="winner" />
                        <img alt="Minh Toàn" src="images/avatar3.jpg" />
                    </div>
                </Row>
                <Row>
                    <h1>Trần Minh Toàn</h1>
                </Row>
                <Row>
                    <h1>1200 Điểm</h1>
                </Row>
            </Col>
        </>
    );
};

export default memo(TopThree);
