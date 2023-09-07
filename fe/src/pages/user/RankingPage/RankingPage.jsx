import React, { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import TopThree from './TopRankComponent/TopThree';
import OtherTop from './TopRankComponent/OtherTop';
import GameBox from './BoxComponent/GameBox';
import UserRanking from './UserRanking';
import { FRIEND_TYPE } from 'utils/constant';

const DATA = [
    {
        avatar: 'images/avatar1.jpg',
        name: 'Trần Minh Toàn',
        score: 1000,
        birth: '01/01/2001',
        start_date: '05/2023',
        follower: '1',
        friend_type: FRIEND_TYPE.NOT_FRIEND,
        total_lecture: 10,
        total_question: 10,
        ranking: 1,
    },
    {
        avatar: 'images/avatar2.jpg',
        name: 'Nguyễn Danh Tiến Dũng',
        score: 150,
        birth: '01/01/2001',
        start_date: '05/2023',
        follower: '1',
        friend_type: FRIEND_TYPE.FRIEND,
        total_lecture: 10,
        total_question: 10,
        ranking: 1,
    },
    {
        avatar: 'images/avatar3.jpg',
        name: 'Trần Quyết Thắng',
        score: 120,
        birth: '01/01/2001',
        start_date: '05/2023',
        follower: '1',
        friend_type: FRIEND_TYPE.SEND_REQUEST,
        total_lecture: 10,
        total_question: 10,
        ranking: 1,
    },
    {
        avatar: 'images/avatar4.jpg',
        name: 'Trần Việt Cường',
        score: 350,
        birth: '01/01/2001',
        start_date: '05/2023',
        follower: '1',
        friend_type: FRIEND_TYPE.NOT_FRIEND,
        total_lecture: 10,
        total_question: 10,
        ranking: 1,
    },
    {
        avatar: '',
        name: 'Trần Trường Sinh',
        score: 500,
        birth: '01/01/2001',
        start_date: '05/2023',
        follower: '1',
        friend_type: FRIEND_TYPE.NOT_FRIEND,
        total_lecture: 10,
        total_question: 10,
        ranking: 1,
    },
    {
        avatar: 'images/avatar2.jpg',
        name: 'Lê Quốc Vũ',
        score: 50,
        birth: '01/01/2001',
        start_date: '05/2023',
        follower: '1',
        friend_type: FRIEND_TYPE.NOT_FRIEND,
        total_lecture: 10,
        total_question: 10,
        ranking: 1,
    },
    {
        avatar: '',
        name: 'Trần Việt Cường',
        score: 350,
        birth: '01/01/2001',
        start_date: '05/2023',
        follower: '1',
        friend_type: FRIEND_TYPE.NOT_FRIEND,
        total_lecture: 10,
        total_question: 10,
        ranking: 1,
    },
    {
        avatar: 'images/avatar2.jpg',
        name: 'Nguyễn Tuấn Long',
        score: 600,
        birth: '01/01/2001',
        start_date: '05/2023',
        follower: '1',
        friend_type: FRIEND_TYPE.NOT_FRIEND,
        total_lecture: 10,
        total_question: 10,
        ranking: 1,
    },
    {
        avatar: '',
        name: 'Lê Quốc Vũ',
        score: 50,
        birth: '01/01/2001',
        start_date: '05/2023',
        follower: '1',
        friend_type: FRIEND_TYPE.NOT_FRIEND,
        total_lecture: 10,
        total_question: 10,
        ranking: 1,
    },
];

const RankingPage = () => {
    DATA.sort((a, b) => b.score - a.score);
    return (
        <div className={style.content}>
            <Col>
                <Row>
                    <div className={style.rankingTitle}>BẢNG XẾP HẠNG</div>
                </Row>
                <Row className={style.topThreeWrapper} align={'top'} justify={'center'}>
                    <Col order={2} span={8}>
                        <TopThree data={DATA.slice(0, 3)[0]} img="/images/winner.png" />
                    </Col>
                    <Col>
                        <TopThree data={DATA.slice(0, 3)[1]} notOne={true} img="/images/second.png" />
                    </Col>
                    <Col order={2} span={6}>
                        <TopThree data={DATA.slice(0, 3)[2]} notOne={true} img="/images/third.png" />
                    </Col>
                </Row>
                <Row className={style.otherTopWrapper} justify={'space-between'}>
                    <Col span={11}>
                        {DATA.slice(3).map((item, index) => {
                            return <OtherTop item={item} index={index + 4} />;
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
};

export default memo(RankingPage);
