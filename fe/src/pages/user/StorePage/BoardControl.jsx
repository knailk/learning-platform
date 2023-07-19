import { memo, useEffect, useState } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
import styles from './style.module.scss';
import { Col, Row } from 'antd';
import clsx from 'clsx';

function BoardControl({ ...props }) {
    const [items, setItems] = useState({
        left: [],
    });
    const [dragOverDelete, setDragOverDelete] = useState(false);
    useEffect(() => {
        if (props.item.hasOwnProperty('position')) {
            setItems({
                left: [...items.left, props.item],
            });
        }
    }, [props.item]);

    const handleDragOverDelete = () => {};

    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        console.log(sourceId, sourceIndex, targetIndex, targetId);
        if (targetId) {
            const result = items[sourceId].filter((val, index) => index != sourceIndex);
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
                <Row className={styles.boardControl}>
                    <GridDropZone className={clsx([styles.dropzone, 'left'])} id="left" boxesPerRow={4} rowHeight={85}>
                        {items.left.map((item) => (
                            <GridItem key={item.position}>
                                <div className={styles.itemControl}>
                                    <div>{item.name.toUpperCase()}</div>
                                </div>
                            </GridItem>
                        ))}
                    </GridDropZone>
                </Row>
                <Row className={clsx([styles.boardDelete], { [styles.dragOver]: dragOverDelete })} onDragOver={console.log(123)}>
                    <GridDropZone className={clsx([styles.dropzone, 'delete'])} id="delete" boxesPerRow={4} rowHeight={85}></GridDropZone>
                </Row>
            </Col>
        </GridContextProvider>
    );
}

export default memo(BoardControl);
