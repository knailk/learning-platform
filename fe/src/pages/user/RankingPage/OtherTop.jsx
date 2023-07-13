import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';

const OtherTop = () => {
    return (
        <>
            <Col span={12}>
                <div className={style.otherTop}>
                    <Row style={{ width: '100%' }}>
                        <Col span={2}>TOP4</Col>
                        <Col span={22}>
                            <Row>
                                <Col className={style.avatar}>
                                    <img src="images/avatar.png" alt="avatar" />
                                    <div className={style.information}>
                                        <span className={style.name}>Trần Minh Toàn</span>
                                        <span className={style.score}>1200 Điểm</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Col>
        </>
    );
};

export default memo(OtherTop);
