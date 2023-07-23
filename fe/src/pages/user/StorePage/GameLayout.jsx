import { memo } from 'react';
import styles from './style.module.scss';
import { Row, Col } from 'antd';
import BoardControl from './BoardControl';

const GameLayout = () => {
    return (
        <>
            <Row>
                <Col>
                    <Row className={styles.gameLayout}></Row>
                    <Col></Col>
                </Col>
                <BoardControl />
            </Row>
        </>
    );
};

export default memo(GameLayout);
