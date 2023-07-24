import { memo, useEffect, useState } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap, move } from 'react-grid-dnd';
import styles from './style.module.scss';
import { Col } from 'antd';
import clsx from 'clsx';

function ListControl({ ...props }) {
    const [items, setItems] = useState({
        itemControl: [
            { position: 1, name: 'left' },
            { position: 3, name: 'left' },
        ],
    });
  
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        // console.log(sourceId, sourceIndex, targetIndex, targetId);
        if (targetId) {
            const result = move(items[sourceId], items[targetId], sourceIndex, targetIndex);
            return setItems({
                ...items,
                [sourceId]: result[0],
                [targetId]: result[1],
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
            <Col className={styles.boardControl}>
                <GridDropZone className={clsx([styles.dropzone, 'itemControl'])} id="itemControl" boxesPerRow={4} rowHeight={85}>
                    {items.itemControl.map((item) => (
                        <GridItem key={item.position}>
                            <div className={styles.itemControl}>
                                <div>{item.name.toUpperCase()}</div>
                            </div>
                        </GridItem>
                    ))}
                </GridDropZone>
            </Col>
        </GridContextProvider>
    );
}

export default memo(ListControl);
