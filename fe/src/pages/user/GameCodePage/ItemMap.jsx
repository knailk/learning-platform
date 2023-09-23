import { useState } from 'react';
import styles from './style.module.scss';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';

const ItemMap = ({ data, current }) => {
    console.log(current);
    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    const popOverContent = (
        <div className={styles.mapItemDescription}>
            <div className={styles.titleDescription}>{data.title}</div>
            <div className={styles.description}>{data.description}</div>
            <Link style={{ pointerEvents: current === data.level ? '' : 'none' }} to={`/play/level/${data.level}`}>
                <div className={styles.buttonPlay}>Chơi</div>
            </Link>
        </div>
    );
    return (
        <>
            <Popover
                content={popOverContent}
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
                rootClassName="popOverItem"
            >
                <div className={styles.itemMap} style={{ left: data.left, top: data.top }}>
                    {(() => {
                        if (current === data.level) {
                            return <img src="/images/game/check_point.png" alt="" />;
                        } else if (current < data.level) {
                            return <img src="/images/game/check_point_classes.png" alt="" />;
                        } else {
                            return <img src="/images/game/level-banner-unlock.png" alt="" />;
                        }
                    })()}
                </div>
            </Popover>
            <div className={styles.pointer} style={{ display: current == data.level ? 'block' : 'none' }}>
                <img
                    className={styles.highlightPointer}
                    src="/images/game/pointer.png"
                    alt=""
                    style={{ left: data.left, top: data.top }}
                />
            </div>
        </>
    );
};
export default ItemMap;
