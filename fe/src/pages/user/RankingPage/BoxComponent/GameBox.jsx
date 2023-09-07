import React, { memo } from 'react';
import style from '../style.module.scss';
import { Row, Col } from 'antd';

const GameBox = () => {
    return (
        <>
            <Row className={style.gameBoxWrapper}>
                <Col>
                    <Row>
                        <h1>Lập trình cùng Thánh Gióng</h1>
                    </Row>
                    <Row style={{ marginTop: '20px' }}>
                        <Col span={4}>
                            <img src="images/game_icon.png" alt="gameicon" />
                        </Col>
                        <Col span={20}>Hãy kiếm nhiều điểm hơn qua trò chơi để nâng cao bảng xếp hạng nhé</Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default memo(GameBox);
