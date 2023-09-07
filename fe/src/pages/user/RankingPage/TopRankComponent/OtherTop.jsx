import React, { memo, useState } from 'react';
import style from '../style.module.scss';
import { Row, Col, Modal } from 'antd';
import clsx from 'clsx';
import AvatarCpn from '../../../../components/Avatar';
import ModalDetailRanking from '../ModalDetailRanking';

const OtherTop = ({ item, index, hasModal }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Row className={clsx([style.userRankingWrapper, style.otherTop])} onClick={showModal}>
                <Col span={24}>
                    <Row>
                        <Col span={4} style={{ textAlign: 'center', margin: 'auto' }}>
                            <h1 style={{ fontSize: '26px' }}>{index}</h1>
                        </Col>
                        <Col className={style.avatar} span={4}>
                            {/* <img src={item.avatar} alt="avatar" /> */}
                            <AvatarCpn src={item.avatar} fullName={item.name} size={60} />
                        </Col>
                        <Col span={12} className={style.information}>
                            <Row>
                                <h1>{item.name}</h1>
                            </Row>
                        </Col>
                        <Col span={4} className={style.top}>
                            {item.score} điểm
                        </Col>
                    </Row>
                </Col>
            </Row>
            {hasModal && (
                <Modal title="" footer="" open={isModalOpen} closeIcon={false}>
                    <ModalDetailRanking userInfor={item} closeModal={handleCancel} />
                </Modal>
            )}
        </>
    );
};

export default memo(OtherTop);
