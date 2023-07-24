import { memo, useEffect, useState } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import styles from './style.module.scss';
import { Col, Row } from 'antd';
import clsx from 'clsx';

function BoardControl() {
    const [itemNum, setItemNum] = useState(4);
    const [items, setItems] = useState({ left: [] });
    const handleAddItem = (name) => {
        setItemNum(itemNum + 1);
        setItems({ left: [...items.left, { position: itemNum + 1, name }] });
    };
    const [play, setPlay] = useState(false);
    console.log(play);
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        if (targetId) {
            const result = items[sourceId].filter((val, index) => index !== sourceIndex);
            return setItems({
                ...items,
                [sourceId]: result,
            });
        }
        if (sourceId !== undefined && sourceIndex !== undefined && targetIndex !== undefined) {
            const result = swap(items[sourceId], sourceIndex, targetIndex);
            return setItems({
                ...items,
                [sourceId]: result,
            });
        }
    }
    return (
        <GridContextProvider onChange={onChange}>
            <Col>
                <Row className={styles.listControl}>
                    <div onClick={() => handleAddItem('left')} className={styles.itemList}>
                        <div>Left</div>
                    </div>
                    <div onClick={() => handleAddItem('right')} className={styles.itemList}>
                        <div>Right</div>
                    </div>

                    <div onClick={() => handleAddItem('jump')} className={styles.itemList}>
                        <div>Jump</div>
                    </div>
                </Row>
                <Row className={styles.boardControl}>
                    <GridDropZone className={clsx([styles.dropzone, 'left'])} id="left" boxesPerRow={4} rowHeight={70} disableDrag={play}>
                        {items.left.map((item) => (
                            <GridItem key={item.position}>
                                <div className={styles.itemControl}>
                                    <div>{item.name.toUpperCase()}</div>
                                </div>
                            </GridItem>
                        ))}
                    </GridDropZone>
                </Row>
                <Row className={styles.buttonControl}>
                    <Col className={clsx([styles.excuteButton])}>
                        <img src={play ? 'images/pause.png' : 'images/execute.png'} alt="execute" onClick={() => setPlay(true)} />
                    </Col>
                    <Col className={clsx([styles.excuteButton])}>
                        <img src="images/stop.png" alt="stop" onClick={() => setPlay(false)} />
                    </Col>
                    <Col className={clsx([styles.boardDelete])}>
                        <GridDropZone className={clsx([styles.dropzone, 'delete'])} id="delete" boxesPerRow={4} rowHeight={85}>
                            <img src="images/recycle.png" alt="delete" />
                        </GridDropZone>
                    </Col>
                </Row>
            </Col>
        </GridContextProvider>
    );
}

export default memo(BoardControl);
