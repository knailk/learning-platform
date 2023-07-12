import { memo } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';
import Friend from '../ProfilePage/Friend/Friend';

const FriendBox = () => {
    return (
        <>
            <Col className={style.friendBoxWrapper}>
                <Friend showTitle={false} />
            </Col>
        </>
    );
};

export default memo(FriendBox);
