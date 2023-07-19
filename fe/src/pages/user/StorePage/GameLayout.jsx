import { memo, useState } from 'react';
import styles from './style.module.scss';
import { Row, Col, Button } from 'antd';
import BoardControl from './BoardControl';
import ListControl from './ListControl';

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
                    <Row className={styles.gameLayout}>
                        Game content
                        <ListControl />
                    </Row>
                    <Col className={styles.listControl}>
                        <Button onClick={() => handleAddItem('left')}>Left</Button>
                        <Button onClick={() => handleAddItem('right')}>Right</Button>
                        <Button onClick={() => handleAddItem('bottom')}>Bottom</Button>
                        <Button onClick={() => handleAddItem('top')}>Top</Button>
                        <Button onClick={() => handleAddItem('jump')}>Jump</Button>
                        <Button onClick={() => handleAddItem('go ahead')}>GoAhead</Button>
                    </Col>
                </Col>
                <BoardControl item={item} />
            </Row>
        </>
    );
};

export default memo(GameLayout);
