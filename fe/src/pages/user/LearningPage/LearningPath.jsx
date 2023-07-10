import { memo, useState } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'antd';
import PathItem from './PathItem';

const LearningPath = () => {
    const [touch, setTouch] = useState(false);
    const pathItem = [1, 2, 3, 4, 5, 6, 7];
    const marginItem = [
        { 'margin-left': '0px' },
        { 'margin-left': '44.884px' },
        { 'margin-left': '70px' },
        { 'margin-left': '44.884px' },
        { 'margin-left': '0px' },
        { 'margin-left': '-44.884px' },
        { 'margin-left': '-70px' },
        { 'margin-left': '-44.884px' },
        { 'margin-left': '0px' },
        { 'margin-left': '44.884px' },
    ];
    return (
        <>
            <Row className={style.headerWrapper}>
                <Col className={style.lessonNumber} span={18}>
                    <h1>Cửa 22</h1>
                    <span>Nhập môn lập trình</span>
                </Col>
                <Col span={6}>
                    <div
                        className={clsx([style.introduceBtn], { [style.btnClickEffect]: touch })}
                        onMouseDown={() => setTouch(true)}
                        onMouseUp={() => setTouch(false)}>
                        <span>
                            <FontAwesomeIcon icon={faBook} />
                        </span>
                        GIỚI THIỆU
                    </div>
                </Col>
            </Row>
            <Row className={style.pathWrapper}>
                <Col>
                    {pathItem.map((element, idx) => {
                        return (
                            <Row key={idx} style={marginItem[idx]}>
                                <PathItem />
                            </Row>
                        );
                    })}
                </Col>
            </Row>
        </>
    );
};

export default memo(LearningPath);
