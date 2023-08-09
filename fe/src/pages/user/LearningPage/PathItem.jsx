import React, { memo, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { Col, Space, Drawer } from 'antd';
import { faStar, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LESSON_STATUS, LESSON_TYPE } from '../../../utils/constant';
import LectureLayout from './LectureComponent/LectureLayout';
import GameLayout from '../GamePage/GameLayout';

const PathItem = ({ ...props }) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [size, setSize] = useState();
    const [size2, setSize2] = useState();
    const showDefaultDrawer = () => {
        setSize('default');
        setOpen(true);
    };
    const showDefaultDrawer2 = () => {
        setSize2('default');
        setOpen2(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onClose2 = () => {
        setOpen2(false);
    };
    const fullWidth = global.window.innerWidth;
    const [touchItemPath, setTouchItemPath] = useState(false);

    const renderSwitch = (status) => {
        switch (status) {
            case LESSON_STATUS.FINISHED:
                return (
                    <Col
                        className={clsx([styles.pathItemWrapper], { [styles.pathItemClick]: touchItemPath }, styles.pathItemFinished)}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}
                        onClick={showDefaultDrawer}>
                        <img src="images/finished_bg.svg" alt="" className={styles.finishedBackground} />
                        <span className={styles.pathIcon} style={{ width: '50px' }}>
                            {props.type === LESSON_TYPE.LEARNING && <img src="images/lesson.svg" alt="check" />}
                            {props.type === LESSON_TYPE.PRACTICE && <img src="images/practice.svg" alt="check" />}
                        </span>
                    </Col>
                );
            case LESSON_STATUS.CURRENT:
                return (
                    <Col
                        className={clsx([styles.pathItemWrapper], { [styles.pathItemClick]: touchItemPath }, styles.pathItemCurrent)}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}
                        onClick={showDefaultDrawer}>
                        <span className={styles.pathIcon}>
                            <FontAwesomeIcon icon={faStar} color={'white'} />
                        </span>
                    </Col>
                );
            case LESSON_STATUS.DISABLED:
                return (
                    <Col
                        className={clsx([styles.pathItemWrapper], { [styles.pathItemClick]: touchItemPath }, styles.pathItemDisabled)}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}
                        onClick={showDefaultDrawer}>
                        <span className={styles.pathIcon} style={{ width: '50px' }}>
                            {props.type === LESSON_TYPE.LEARNING && <img src="images/lesson_disabled.svg" alt="learning" />}
                            {props.type === LESSON_TYPE.PRACTICE && <img src="images/practice_disabled.svg" alt="practice" />}
                        </span>
                    </Col>
                );
            default:
                return (
                    <Col
                        className={clsx([styles.pathItemWrapper], { [styles.pathItemClick]: touchItemPath }, styles.pathItemDisabled)}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}
                        onClick={showDefaultDrawer2}>
                        <span className={styles.pathIcon} style={{ width: '50px' }}>
                            {props.type === LESSON_TYPE.LEARNING && <img src="images/game_practice.png" alt="learning" />}
                            {props.type === LESSON_TYPE.PRACTICE && <img src="images/game_practice.png" alt="practice" />}
                        </span>
                    </Col>
                );
        }
    };

    return (
        <>
            <Space>{renderSwitch(props.status)}</Space>
            <Drawer width={fullWidth} placement="right" size={size} onClose={onClose} open={open} headerStyle={{ display: 'none' }}>
                <LectureLayout />
            </Drawer>
            <Drawer className={styles.gameDrawerWrapper} width={fullWidth} title={`Game Layout`} placement="right" size={size2} onClose={onClose2} open={open2}>
                <GameLayout />
            </Drawer>
        </>
    );
};

export default memo(PathItem);
