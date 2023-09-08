import style from './PersonalInfomation.module.scss';
import common_style from './style.module.scss';
import React, { memo, useState } from 'react';
import dayjs from 'dayjs';
import { Row, Col, notification, DatePicker, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCakeCandles,
    faUser,
    faUserPen,
    faPen,
    faPhone,
    faClock,
    faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import request from 'utils/http';

function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const PersonalInformation = (props) => {
    const { profile } = props;
    const [nameValue, setNameValue] = useState('');
    const [birthValue, setBirthValue] = useState(profile.birth);
    const [phoneNumber, setPhoneNumber] = useState(profile.phone);
    const [editProfile, setEditProfile] = useState(false);
    console.log(profile);
    const handleEditButton = async () => {
        if (editProfile) {
            try {
                await request
                    .put('user/profile', { name: nameValue, birth: birthValue, phone: phoneNumber })
                    .then(function () {
                        setEditProfile(!editProfile);
                        notification.success({ message: 'Thay đổi thông tin thành công' });
                    });
            } catch (error) {
                console.log(error);
                notification.error({ message: 'Thay đổi thông tin thất bại' });
            }
        } else {
            setEditProfile(!editProfile);
        }
    };

    const handleInputChange = (e) => {
        setNameValue(e.target.value);
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
                            onChange={handleInputChange}
                            defaultValue={profile.name}
                            readOnly={!editProfile}
                        />
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        {profile.id}
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faCakeCandles} />
                        </span>
                        {editProfile && (
                            <Space direction="vertical" size={12}>
                                <DatePicker
                                    className={style.datePicker}
                                    defaultValue={dayjs(
                                        birthValue ? formatDate(birthValue) : formatDate(new Date()),
                                        'DD/MM/YYYY',
                                    )}
                                    format={'DD/MM/YYYY'}
                                    readOnly={true}
                                    allowClear={false}
                                    suffixIcon={false}
                                    style={{ fontWeight: 'bold' }}
                                    onChange={(__date, dateString) => setBirthValue(formatDate(dateString))}
                                />
                            </Space>
                        )}
                        {!editProfile && (birthValue ? formatDate(birthValue) : formatDate(new Date()))}
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        </span>
                        {editProfile && (
                            <input
                                type="text"
                                value={phoneNumber}
                                className={style.inputPhone}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                }}
                            />
                        )}
                        {!editProfile && phoneNumber}
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        Đã tham gia vào {formatDate(profile.created_at)}
                    </Row>
                </Col>
                <Col xl={4} lg={4} md={24}>
                    <div className={style.editButton} onClick={() => handleEditButton()}>
                        {!editProfile && (
                            <>
                                {' '}
                                <span>
                                    <FontAwesomeIcon icon={faUserPen} />
                                </span>
                                <p>Chỉnh sửa</p>
                            </>
                        )}
                        {editProfile && (
                            <>
                                {' '}
                                <span>
                                    <FontAwesomeIcon icon={faFloppyDisk} />
                                </span>
                                <p>Lưu lại</p>
                            </>
                        )}
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default memo(PersonalInformation);
