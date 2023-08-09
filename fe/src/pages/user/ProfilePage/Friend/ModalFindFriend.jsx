import React, { useState } from 'react';
import styles from './style.module.scss';
import Follow from './Follow';
import { Col, Row } from 'antd';
const ModalFindFriend = () => {
    return (
        <>
            <div className={styles.findFriendWrapper}>
                <div className={styles.findFriendTitle}>
                    <h1>Tìm bạn</h1>
                </div>
                <div>
                    <input type="text" placeholder="Tìm bạn bè" />
                </div>
                {/* <div className={styles.listFind}>
                    <Row>
                        <Col span={18}>
                            <Follow name="Trần Minh Toàn" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1164864020/I4X9TktOvb/xxlarge" />
                        </Col>
                        <Col>
                            <div className={styles.followButton}> + Theo dõi</div>
                        </Col>
                    </Row>
                </div> */}
                <div className={styles.imageWrapper}>
                    <img src="images/find-friend.jpg" alt="find-friend" width={400} />
                </div>
                <div className={styles.quotes}>Kết nối bạn bè giúp học vui và hiệu quả hơn</div>
            </div>
        </>
    );
};
export default ModalFindFriend;
