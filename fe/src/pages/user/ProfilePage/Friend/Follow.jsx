import React from 'react';
import { Row, Col } from 'antd';
import style from './Friend.module.scss';
const Follow = ({ ...props }) => {
    return (
        <>
            <div className={style.followWraper}>
                <Row>
                    <Col className={style.avatar} xxl={4} lg={5}>
                        <img alt={props.name} src={props.avatar} />
                    </Col>
                    <Col xxl={20} md={19}>
                        <Row className={style.name}>
                            <h1>{props.name}</h1>
                        </Row>
                        <Row className={style.level}>{props.level}</Row>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Follow;
