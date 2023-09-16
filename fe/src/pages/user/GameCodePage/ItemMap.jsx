import { useState } from 'react';
import styles from './style.module.scss';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';

const ItemMap = ({ left, bottom, data }) => {
    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const popOverContent = (
        <div className={styles.mapItemDescription}>
            <div className={styles.titleDescription}>{data.title}</div>
            <div className={styles.description}>{data.description}</div>
            <Link to={`/play/level/${data.level}`}>
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
                <div className={styles.itemMap} style={{ left: left, bottom: bottom }}></div>
            </Popover>
        </>
    );
};
export default ItemMap;
