import { memo } from 'react';
import { Row, Col } from 'antd';
import styles from './style.module.scss';
import clsx from 'clsx';

const Lecture = ({ ...props }) => {
    const data = props.data;
    console.log(data);

    const Lecture = (lecture) => {
        switch (lecture.type) {
            case 'text':
                return <p>{lecture.content}</p>;
            case 'code':
                return <pre>{lecture.content}</pre>;
            case 'image':
                return <img src={`/images/lecture/${lecture.content}`} alt="" />;
            default:
                break;
        }
        return <></>;
    };

    return (
        <>
            {data.lectures && (
                <Col className={clsx(styles.lectureWrapper)} style={props.style}>
                    <Row className={styles.lectureTitle}>
                        <h1>{data.name}</h1>
                    </Row>
                    {data.lectures.map((lecture) => {
                        return (
                            <Row className={styles.lectureContent} key={lecture.id}>
                                {/* {lecture.content} */}
                                <Lecture {...lecture} />
                            </Row>
                        );
                    })}
                </Col>
            )}
        </>
    );
};

export default memo(Lecture);
