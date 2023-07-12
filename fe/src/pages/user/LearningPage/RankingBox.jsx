import { memo } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';

const RankingBox = () => {
    return (
        <>
            <Row className={style.rankingBoxWrapper}>
                <Col>
                    <Row>
                        <h1>Mở khóa Bảng xếp hạng!</h1>
                    </Row>
                    <Row style={{ marginTop: '20px' }}>
                        <Col span={6}>
                            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg" />
                        </Col>
                        <Col span={18}>Hoàn thành thêm 8 bài học để bắt đầu thi đua</Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default memo(RankingBox);
