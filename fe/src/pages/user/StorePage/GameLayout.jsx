import { memo, useState } from 'react';
import styles from './style.module.scss';
import { Row, Col, Button } from 'antd';
import BoardControl from './BoardControl';

const GameLayout = () => {
    const [itemNum, setItemNum] = useState(4);
    const [item, setItem] = useState({});
    const handleAddItem = (name) => {
        setItemNum(itemNum + 1);
        setItem({ position: itemNum + 1, name });
    };
    return (
        <>
            <Row>
                <Col>
                    <Row className={styles.gameLayout}></Row>
                    <Col>
                        <Row className={styles.listControl}>
                            <div onClick={() => handleAddItem('left')} className={styles.itemList}>
                                <div>Left</div>
                            </div>
                            <div onClick={() => handleAddItem('right')} className={styles.itemList}>
                                <div>Right</div>
                            </div>
                            <div onClick={() => handleAddItem('top')} className={styles.itemList}>
                                <div>Top</div>
                            </div>
                            <div onClick={() => handleAddItem('bottom')} className={styles.itemList}>
                                <div>Bottom</div>
                            </div>
                            <div onClick={() => handleAddItem('jump')} className={styles.itemList}>
                                <div>Jump</div>
                            </div>
                            <div onClick={() => handleAddItem('go ahead')} className={styles.itemList}>
                                <div>GoAhead</div>
                            </div>
                        </Row>
                    </Col>
                </Col>
                <BoardControl item={item} />
            </Row>
        </>
    );
};

export default memo(GameLayout);
