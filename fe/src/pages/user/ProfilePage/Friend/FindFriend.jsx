import React, { memo, useState } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';
import { Modal } from 'antd';
import ModalFindFriend from './ModalFindFriend';

const FindFriend = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className={style.boxWrapper}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} lg={12}>
                        <div className={style.findFriendBox}>
                            <Row>
                                <h1>Thêm bạn bè</h1>
                            </Row>
                            <Row style={{ marginTop: 5 }}>
                                <Col span={6} className={style.searchIcon}>
                                    <img alt="icon" src="images/search.png" />
                                </Col>
                                <Col span={18} style={{ marginTop: 10 }} onClick={showModal}>
                                    Tìm bạn bè
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={12}>
                        <div className={style.rankingBoxWrapper}>
                            <Row>
                                <Col>
                                    <Row>
                                        <h1>Mở khóa Bảng xếp hạng!</h1>
                                    </Row>
                                    <Row style={{ marginTop: '7px' }}>
                                        <Col span={6}>
                                            <img alt="icon" src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg" />
                                        </Col>
                                        <Col span={18}>Hoàn thành thêm 8 bài học để bắt đầu thi đua</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <Modal open={isModalOpen} onCancel={handleCancel} footer="" width={600} bodyStyle={{ height: 400 }}>
                <ModalFindFriend />
            </Modal>
        </>
    );
};

export default memo(FindFriend);
