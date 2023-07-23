import { memo, useState } from 'react';
import clsx from 'clsx';
import style from './style.module.scss';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Popover } from 'antd';
import PathItem from './PathItem';

const LearningPath = ({ ...props }) => {
    const [touch, setTouch] = useState(false);
    const pathItem = props.data.lesson;
    const marginItem = [
        { marginLeft: '0px' },
        { marginLeft: '44.884px' },
        { marginLeft: '70px' },
        { marginLeft: '44.884px' },
        { marginLeft: '0px' },
        { marginLeft: '-44.884px' },
        { marginLeft: '-70px' },
        { marginLeft: '-44.884px' },
        { marginLeft: '0px' },
        { marginLeft: '44.884px' },
    ];
    return (
        <>
            <Row className={style.headerWrapper} justify={'space-between'}>
                <Col className={style.lessonNumber} span={18} sm={18}>
                    <h1>Cửa {props.data.level}</h1>
                    <span>{props.data.name}</span>
                </Col>
                <Col span={6} sm={6}>
                    <Popover
                        content={
                            <div className={style.desciption}>
                                <span>{props.data.name}</span>
                            </div>
                        }
                        trigger="click">
                        <div
                            className={clsx([style.introduceBtn], { [style.btnClickEffect]: touch })}
                            onMouseDown={() => setTouch(true)}
                            onMouseUp={() => setTouch(false)}>
                            <span>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            GIỚI THIỆU
                        </div>
                    </Popover>
                </Col>
            </Row>
            <Row className={style.pathWrapper}>
                <Col>
                    {pathItem.map((element) => {
                        return (
                            <Row key={element.position} style={marginItem[element.position]}>
                                <PathItem status={element.status} type={element.type} />
                            </Row>
                        );
                    })}
                </Col>
            </Row>
        </>
    );
};

export default memo(LearningPath);
