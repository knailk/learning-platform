import React, { useState } from 'react';
import { Row, Col, Modal } from 'antd';
import style from './style.module.scss';
import AvatarCpn from '../../../../components/Avatar';
import ModalUserInfo from 'components/UserInfo';
const Follow = (props) => {
    const { user } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={style.followWrapper}>
                <Row onClick={showModal}>
                    <Col className={style.avatar} xxl={4} lg={5}>
                        {/* <img alt={user.name} src={user.avatar} /> */}
                        <AvatarCpn src={user.avatar} fullName={user.name} size={50} />
                    </Col>
                    <Col xxl={20} md={19}>
                        <Row className={style.name}>
                            <h1>{user.name}</h1>
                        </Row>
                        <Row className={style.level}>Tổng điểm: {user.score}</Row>
                    </Col>
                </Row>
            </div>
            <Modal title="" footer="" open={isModalOpen} closeIcon={false} onCancel={handleCancel}>
                <ModalUserInfo userInfo={{ ...user, isExist: true }} closeModal={handleCancel} />
            </Modal>
        </>
    );
};

export default Follow;
