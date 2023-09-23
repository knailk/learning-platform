import { Col, Row } from 'antd';
import styles from './style.module.scss';
const FailedResult = ({ detail }) => {
    return (
        <Col className={styles.failedResultWrapper}>
            <Row className={styles.errorTitle}>{detail.title}</Row>
            <Row className={styles.errorDetail}>
                <pre>{detail.message}</pre>
            </Row>
        </Col>
    );
};

export default FailedResult;
