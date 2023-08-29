import React, { memo, useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import { Col, Space, Drawer } from "antd";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LESSON_STATUS, LESSON_TYPE } from "../../../utils/constant";
import LessonLayout from "./LessonComponent/LessonLayout";

const PathItem = ({ ...props }) => {
    const data = props.data;
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const [detailChapters, setDetailChapters] = useState({});
    const showDefaultDrawer = () => {
        setDetailChapters(data);
        setSize("default");
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
                        <img
                            src="images/finished_bg.svg"
                            alt=""
                            className={styles.finishedBackground}
                        />
                        <span
                            className={styles.pathIcon}
                            style={{ width: "50px" }}
                        >
                            {data.type === LESSON_TYPE.LEARNING && (
                                <img src="images/lesson.svg" alt="check" />
                            )}
                            {data.type === LESSON_TYPE.PRACTICE && (
                                <img src="images/practice.svg" alt="check" />
                            )}
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
                            <FontAwesomeIcon icon={faStar} color={"white"} />
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
                        <span
                            className={styles.pathIcon}
                            style={{ width: "50px" }}
                        >
                            {data.type === LESSON_TYPE.LEARNING && (
                                <img
                                    src="images/lesson_disabled.svg"
                                    alt="learning"
                                />
                            )}
                            {data.type === LESSON_TYPE.PRACTICE && (
                                <img
                                    src="images/practice_disabled.svg"
                                    alt="practice"
                                />
                            )}
                        </span>
                    </Col>
                );
        }
    };

    return (
        <>
            <Space>{renderSwitch(data.status)}</Space>
            <Drawer
                width={fullWidth}
                placement="right"
                size={size}
                onClose={onClose}
                open={open}
                headerStyle={{ display: "none" }}
            >
                <LessonLayout data={detailChapters} />
            </Drawer>
        </>
    );
};

export default memo(PathItem);
