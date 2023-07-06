import { Row, Col } from 'antd';
import style from './Friend.module.scss'
const Follow = () => {
    return (
        <>
            <div className={style.followWraper}>
                <Row>
                    <Col span={4}>Img</Col>
                    <Col span={20}>
                        <Row>Nguyen dnah tien dung</Row>
                        <Row>Level 12</Row>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Follow;
