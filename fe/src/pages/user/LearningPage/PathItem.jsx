import clsx from 'clsx';
import style from './style.module.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'antd';
import { memo, useState } from 'react';

const PathItem = () => {
    const [touchItemPath, setTouchItemPath] = useState(false);
    return (
        <>
            <Col
                className={clsx([style.pathItemWrapper], { [style.pathItemClick]: touchItemPath })}
                onMouseDown={() => setTouchItemPath(true)}
                onMouseUp={() => setTouchItemPath(false)}>
                <span className={style.pathIcon}>
                    <FontAwesomeIcon icon={faStar} />
                </span>
            </Col>
        </>
    );
};

export default memo(PathItem);
