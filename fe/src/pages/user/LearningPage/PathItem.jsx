import clsx from 'clsx';
import style from './style.module.scss';
import { faStar, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'antd';
import { memo, useState } from 'react';
import { LESSON_STATUS, LESSON_TYPE } from '../../../utils/constant';

const PathItem = ({ ...props }) => {
    const [touchItemPath, setTouchItemPath] = useState(false);
    switch (props.status) {
        case LESSON_STATUS.FINISHED:
            return (
                <>
                    <Col
                        className={clsx([style.pathItemWrapper], { [style.pathItemClick]: touchItemPath }, style.pathItemFinished)}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}>
                        <img src="images/finished_bg.svg" alt="" className={style.finishedBackground} />
                        <span className={style.pathIcon} style={{ width: '50px' }}>
                            {props.type === LESSON_TYPE.LEARNING && <img src="images/lesson.svg" alt="check" />}
                            {props.type === LESSON_TYPE.PRACTICE && <img src="images/practice.svg" alt="check" />}
                        </span>
                    </Col>
                </>
            );
        case LESSON_STATUS.CURRENT:
            return (
                <>
                    <Col
                        className={clsx([style.pathItemWrapper], { [style.pathItemClick]: touchItemPath }, style.pathItemCurrent)}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}>
                        <span className={style.pathIcon}>
                            <FontAwesomeIcon icon={faStar} color={'white'} />
                        </span>
                    </Col>
                </>
            );
        case LESSON_STATUS.DISABLED:
            return (
                <>
                    <Col
                        className={clsx([style.pathItemWrapper], { [style.pathItemClick]: touchItemPath }, style.pathItemDisabled)}
                        onMouseDown={() => setTouchItemPath(true)}
                        onMouseUp={() => setTouchItemPath(false)}>
                        <span className={style.pathIcon} style={{ width: '50px' }}>
                            {props.type === LESSON_TYPE.LEARNING && <img src="images/lesson_disabled.svg" alt="learning" />}
                            {props.type === LESSON_TYPE.PRACTICE && <img src="images/practice_disabled.svg" alt="practice" />}
                        </span>
                    </Col>
                </>
            );

        default:
            break;
    }
    return <></>;
};

export default memo(PathItem);
