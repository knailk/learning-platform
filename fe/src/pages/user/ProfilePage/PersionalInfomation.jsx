import style from './PersionalInfomation.module.scss';
import common_style from './style.module.scss';
import React, { memo, useState } from 'react';
import { Row, Col, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCakeCandles,
    faUser,
    faUserPen,
    faPen,
    faUserGroup,
    faClock,
    faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
const PersionalInformation = () => {
    const [editProfile, setEditProfile] = useState(false);
    const [textEdit, setTextEdit] = useState('Chỉnh sửa');
    const handleEditButton = () => {
        if (editProfile) {
            openMessage();
            setEditProfile(!editProfile);
            setTextEdit('Chỉnh sửa');
        } else {
            setTextEdit('Lưu lại');
            setEditProfile(!editProfile);
        }
    };
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Đang lưu...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'Thành công!',
                duration: 2,
            });
        }, 1000);
    };

    return (
        <>
            <Row className={style.personalInformationWrapper}>
                <Col xl={6} lg={8} md={8}>
                    <div className={style.avatarWrapper}>
                        <div className={style.editAvatarButton}>
                            <FontAwesomeIcon icon={faPen} />
                        </div>
                        <img alt="Minh Toàn" src="images/avatar.png" />
                    </div>
                </Col>
                <Col className={style.inforWrapper} xl={14} lg={12} md={16}>
                    <Row className={style.titleProfile}>
                        <input
                            className={clsx({ [style.notEditInput]: !editProfile }, { [style.editInput]: editProfile })}
                            type="text"
                            value={'Minh Toàn'}
                            readOnly={!editProfile}
                        />
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        UserId
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faCakeCandles} />
                        </span>
                        10/08/2001
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        Đã tham gia vào Tháng Năm 2023
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
                        </span>
                        Đang theo dõi 0 / 0 Người đang theo dõi
                    </Row>
                </Col>
                <Col xl={4} lg={4} md={24}>
                    {contextHolder}
                    <div className={style.editButton} onClick={() => handleEditButton()}>
                        <span>
                            {!editProfile && <FontAwesomeIcon icon={faUserPen} />}
                            {editProfile && <FontAwesomeIcon icon={faFloppyDisk} />}
                        </span>
                        <p>{textEdit}</p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default memo(PersionalInformation);
