import { memo } from 'react';
import { Row, Col } from 'antd';
import styles from './style.module.scss';
import clsx from 'clsx';

const Lecture = ({ ...props }) => {
    const data = props.data;
    return (
        <>
            {data.lectures && (
                <Col className={clsx(styles.lectureWrapper)}>
                    <Row className={styles.lectureTitle}>
                        <h1>{data.name}</h1>
                    </Row>
                    {data.lectures.map((lecture) => {
                        return (
                            <Row className={styles.lectureContent} key={lecture.id}>
                                {lecture.content}
                            </Row>
                        );
                    })}
                </Col>
            )}
        </>
    );
};

export default memo(Lecture);
