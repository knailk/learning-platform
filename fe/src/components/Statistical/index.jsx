import styles from './style.module.scss';
import { Row, Col } from 'antd';

const StatisticalCpn = ({ title, total, img, height = 70 }) => {
    return (
        <div className={styles.detail} style={{ height: height }}>
            <Row>
                <Col span={4} className={styles.imgDetail}>
                    <img alt="img" src={img} />
                </Col>
                <Col span={18}>
                    <Row style={{ paddingTop: '5px' }}>
                        <h1>
                            {title}: {total}
                        </h1>
                    </Row>
                    {/* <Row>
                        <h1>{total}</h1>
                    </Row> */}
                </Col>
            </Row>
        </div>
    );
};

export default StatisticalCpn;
