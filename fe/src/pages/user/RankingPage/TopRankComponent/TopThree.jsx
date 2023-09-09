import React, { memo, useState } from 'react';
import style from '../style.module.scss';
import { Row, Col, Modal } from 'antd';
import AvatarCpn from '../../../../components/Avatar';
import ModalDetailRanking from '../ModalDetailRanking';
const TopThree = ({ ...props }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const data = props.data;
    console.log(data);
    return (
        <>
            <Row
                onClick={showModal}
                align={props.notOne && 'bottom'}
                style={props.notOne && { height: '250px' }}
                span={6}
            >
                <div className={props.notOne ? style.topTwoWrapper : style.topOneWrapper}>
                    <img className={props.notOne ? style.topTwoIcon : style.topOneIcon} src={props.img} alt="winner" />
                    <AvatarCpn
                        src={data.avatar}
                        fullName={data.name}
                        size={props.notOne ? 150 : 200}
                        style={{
                            position: 'inherit',
                        }}
                    />
                </div>
            </Row>
            <Row>
                <h1 style={{ fontSize: '18px' }}>{data.name}</h1>
            </Row>
            <Row>
                <h3>{data.score} Điểm</h3>
            </Row>
            <Modal title="" footer="" open={isModalOpen} closeIcon={false}>
                <ModalDetailRanking userInfo={data} closeModal={handleCancel} />
            </Modal>
        </>
    );
};

export default memo(TopThree);
