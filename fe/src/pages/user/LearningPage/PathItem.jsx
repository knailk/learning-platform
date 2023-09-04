import React, { memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { Col, Space, Drawer } from 'antd';
import { LESSON_STATUS, LESSON_TYPE } from '../../../utils/constant';
import LessonLayout from './LessonComponent/LessonLayout';

const PathItem = ({ ...props }) => {
    const data = props.data;
    let statusItem = LESSON_STATUS.DISABLED;
    if (data.chapter_id === props.currentChapter.chapter_id && data.id === props.currentChapter.lesson_id) {
        statusItem = LESSON_STATUS.CURRENT;
    } else {
        props.finishState.forEach((element) => {
            if (element.chapter_id === element.chapter_id && data.id === element.lesson_id) {
                statusItem = LESSON_STATUS.FINISHED;
            }
        });
    }

    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const [detailChapters, setDetailChapters] = useState({});
    const showDefaultDrawer = () => {
        setDetailChapters(data);
        setSize('default');
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const fullWidth = global.window.innerWidth;
    const [touchItemPath, setTouchItemPath] = useState(false);

    const renderSwitch = (status) => {
        switch (status) {
            case LESSON_STATUS.FINISHED:
                return (
                    <Col
                        className={clsx(
                            [styles.pathItemWrapper],
                            { [styles.pathItemClick]: touchItemPath },
                            styles.pathItemFinished,
                        )}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}
                        onClick={showDefaultDrawer}
                    >
                        <img src="images/finished_bg.svg" alt="" className={styles.finishedBackground} />
                        <span className={styles.pathIcon} style={{ width: '50px' }}>
                            {data.type === LESSON_TYPE.LEARNING && <img src="images/lesson.svg" alt="check" />}
                            {data.type === LESSON_TYPE.PRACTICE && <img src="images/practice.svg" alt="check" />}
                        </span>
                    </Col>
                );
            case LESSON_STATUS.CURRENT:
                return (
                    <Col
                        className={clsx(
                            [styles.pathItemWrapper],
                            { [styles.pathItemClick]: touchItemPath },
                            styles.pathItemCurrent,
                        )}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}
                        onClick={showDefaultDrawer}
                    >
                        <span className={styles.pathIcon}>
                            <img src="images/current.svg" alt="current" />
                        </span>
                    </Col>
                );
            default:
                return (
                    <Col
                        className={clsx(
                            [styles.pathItemWrapper],
                            { [styles.pathItemClick]: touchItemPath },
                            styles.pathItemDisabled,
                        )}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}
                        onClick={showDefaultDrawer}
                    >
                        <span className={styles.pathIcon} style={{ width: '50px' }}>
                            {data.type === LESSON_TYPE.LEARNING && (
                                <img src="images/lesson_disabled.svg" alt="learning" />
                            )}
                            {data.type === LESSON_TYPE.PRACTICE && (
                                <img src="images/practice_disabled.svg" alt="practice" />
                            )}
                        </span>
                    </Col>
                );
        }
    };

    return (
        <>
            <Space>{renderSwitch(statusItem)}</Space>
            <Drawer
                width={fullWidth}
                placement="right"
                size={size}
                onClose={onClose}
                open={open}
                headerStyle={{ display: 'none' }}
            >
                <LessonLayout
                    data={detailChapters}
                    onClose={onClose}
                    currentChapter={props.currentChapter}
                    finishState={props.finishState}
                    nextState={props.nextState}
                />
            </Drawer>
        </>
    );
};

export default memo(PathItem);
