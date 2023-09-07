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
                span={props.notOne && 6}
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
                <h1>{data.name}</h1>
            </Row>
            <Row>
                <h1>{data.score} Điểm</h1>
            </Row>
            <Modal title="" footer="" open={isModalOpen} closeIcon={false}>
                <ModalDetailRanking userInfor={data} closeModal={handleCancel} />
            </Modal>
            {/* <Col>
                <Row align={'bottom'} style={{ height: '250px' }} order={1} span={6} onClick={showModal1}>
                    <div className={style.topTwoWrapper}>
                        <img className={style.topTwoIcon} src="images/second.png" alt="winner" />
                        <AvatarCpn
                            src={data[1].avatar}
                            fullName={data[1].name}
                            size={150}
                            style={{
                                position: 'inherit',
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <h1>{data[1].name}</h1>
                </Row>
                <Row>
                    <h1>{data[1].score} Điểm</h1>
                </Row>
                <Modal title="" footer="" open={isModalOpen1} closeIcon={false}>
                    <ModalDetailRanking userInfor={data[1]} closeModal={handleCancel1} />
                </Modal>
            </Col>
            <Col order={3} span={6}>
                <Row align={'bottom'} style={{ height: '250px' }} onClick={showModal2}>
                    <div className={style.topTwoWrapper}>
                        <img className={style.topTwoIcon} src="images/third.png" alt="winner" />
                        <AvatarCpn
                            src={data[2].avatar}
                            fullName={data[2].name}
                            size={150}
                            style={{
                                position: 'inherit',
                            }}
                        />
                    </div>
                </Row>
                <Row>
                    <h1>{data[2].name}</h1>
                </Row>
                <Row>
                    <h1>{data[2].score} Điểm</h1>
                </Row>
                <Modal title="" footer="" open={isModalOpen2} closeIcon={false}>
                    <ModalDetailRanking userInfor={data[2]} closeModal={handleCancel2} />
                </Modal>
            </Col> */}
        </>
    );
};

export default memo(TopThree);
