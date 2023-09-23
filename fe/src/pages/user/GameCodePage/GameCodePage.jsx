import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import ItemMap from './ItemMap';
import { Helmet } from 'react-helmet';
import { Row, Spin, notification } from 'antd';
import './customStyle.scss';
import { Link } from 'react-router-dom';
import request from 'utils/http';
import { MappingLocation } from './constant';

const GameCodePage = () => {
    const [profile, setProfile] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await request.get('auth/me');
                setProfile(response.data.user);
            } catch (error) {
                notification.error({
                    message: 'Lỗi hệ thống!',
                    description: error,
                });
            }
        };
        fetchProfile();
    }, []);

    if (!profile) {
        return <Spin />;
    } else {
        return (
            <>
                <Helmet>
                    <title>Trò chơi lập trình</title>
                </Helmet>
                <div className={styles.gameCodePageWrapper}>
                    <div className={styles.gameCodePageHeader}>
                        <Row className={styles.logo}>
                            <Link to={'/'}>
                                <img src="/images/game/logo_game.png" alt="" />
                            </Link>
                        </Row>
                    </div>
                    <div className={styles.gameMap}>
                        <img src="/images/game/Dungeon_Map1.jpg" alt="" />
                        <div className={styles.linearLeft}></div>
                        <div className={styles.linearRight}></div>
                        <div className={styles.linearTop}></div>
                        <div className={styles.linearBottom}></div>

                        {MappingLocation.map((item) => {
                            return <ItemMap data={item} current={profile.current_game_level} />;
                        })}
                    </div>
                </div>
            </>
        );
    }
};
export default GameCodePage;
