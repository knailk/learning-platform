import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Input, Button, notification } from 'antd';

import styles from './style.module.scss';
import Follow from './Follow';
import request from 'utils/http';

function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const ModalFindFriend = () => {
    const [users, setUsers] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        if (e.target.value.length === 0) {
            setUsers(false);
            return;
        }

        setSearchTimeout(
            setTimeout(() => {
                performSearch(e.target.value);
            }, 300),
        );
    };

    const handleKeyPress = (e) => {
        // Check if the Enter key (key code 13) is pressed
        if (e.key === 'Enter') {
            // Perform the search using the searchText
            performSearch(searchText);
        }
    };

    const performSearch = async (query) => {
        try {
            const res = await request.get('users?name=' + query);
            setUsers(res.data.data);
        } catch (error) {
            notification.error({ message: 'Lỗi hệ thống!', description: error.message });
        }
    };

    return (
        <>
            <div className={styles.findFriendWrapper}>
                <div className={styles.findFriendTitle}>
                    <h1>Tìm bạn</h1>
                </div>
                <div>
                    <Input
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        className={styles.inputText}
                        type="text"
                        placeholder="Tìm bạn bè"
                    />
                </div>
                {users ? (
                    <div className={styles.listFind}>
                        {users.map((user, index) => {
                            return (
                                <Row>
                                    <Col span={18}>
                                        <Follow user={user} key={index} />
                                    </Col>
                                    <Col span={6}>
                                        {/* <Button
                                        type="primary"
                                        icon={<FontAwesomeIcon icon={faUserPlus} style={{ color: '#ffffff' }} />}
                                        size={'middle'}
                                        onClick={() => {
                                            handleFollow(user);
                                        }}
                                    >
                                        Theo dõi
                                    </Button> */}
                                        <p>Tham gia từ {formatDate(user.created_at)}</p>
                                    </Col>
                                </Row>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <div className={styles.imageWrapper}>
                            <img src="images/find-friend.jpg" alt="find-friend" width={400} />
                        </div>
                        <div className={styles.quotes}>Kết nối bạn bè giúp học vui và hiệu quả hơn</div>
                    </div>
                )}
            </div>
        </>
    );
};
export default ModalFindFriend;
