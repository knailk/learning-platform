import { memo } from 'react';
import styles from './style.module.scss';
import { Row, Col } from 'antd';

const GameLayout = ({ ...props }) => {
    return (
        <>
            <Row>
                <Col>
                    <Row className={styles.gameLayout}>Game content</Row>
                    <Col className={styles.listControl}></Col>
                </Col>
                <Col className={styles.boardControl}>
                    <div className={styles.itemControl}>
                        <div>item</div>
                    </div>
                    <div className={styles.itemControl}>
                        <div>item</div>
                    </div>
                    <div className={styles.itemControl}>
                        <div>item</div>
                    </div>
                    <div className={styles.itemControl}>
                        <div>item</div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default memo(GameLayout);
