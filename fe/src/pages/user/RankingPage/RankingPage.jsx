import React, { memo, useEffect, useState } from 'react';
import style from './style.module.scss';
import { Row, Col, notification, Spin } from 'antd';
import TopThree from './TopRankComponent/TopThree';
import OtherTop from './TopRankComponent/OtherTop';
import GameBox from './BoxComponent/GameBox';
import UserRanking from './UserRanking';
import request from 'utils/http';

const RankingPage = () => {
    const [ranking, setRanking] = useState([]);

    const fetchData = async () => {
        try {
            const response = await request.get('user/rank');
            console.log('response: ', response);
            setRanking(response.data.data);
        } catch (error) {
            console.log(error);
            notification.error({ message: 'Lỗi hệ thống!', description: error.message });
        }
    };

    useEffect(() => {
        console.log('useEffect is executed');
        fetchData();
    }, []);

    if (ranking.length !== 0) {
        ranking.sort((a, b) => a.ranking - b.ranking);

        return (
            <div className={style.content}>
                <Col>
                    <Row>
                        <div className={style.rankingTitle}>BẢNG XẾP HẠNG</div>
                    </Row>
                    <Row className={style.topThreeWrapper} align={'top'} justify={'center'}>
                        <Col order={2} span={8}>
                            <TopThree data={ranking.slice(0, 3)[0]} img="/images/winner.png" />
                        </Col>
                        <Col order={1} span={6}>
                            <TopThree data={ranking.slice(0, 3)[1]} notOne={true} img="/images/second.png" />
                        </Col>
                        <Col order={3} span={6}>
                            <TopThree data={ranking.slice(0, 3)[2]} notOne={true} img="/images/third.png" />
                        </Col>
                    </Row>
                    <Row className={style.otherTopWrapper} justify={'space-between'}>
                        <Col span={11}>
                            {ranking.slice(3).map((item, index) => {
                                return <OtherTop item={item} index={index + 4} hasModal={true} />;
                            })}
                        </Col>
                        <Col span={11}>
                            <UserRanking />
                            <GameBox />
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    } else {
        return <Spin />;
    }
};

export default memo(RankingPage);
