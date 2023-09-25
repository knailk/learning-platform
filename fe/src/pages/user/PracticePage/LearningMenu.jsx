import clsx from 'clsx';
import React, { memo, useEffect, useState } from 'react';
import styles from './style.module.scss';
import { Row, Col, Menu, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import request from 'utils/http';

const LearningMenu = () => {
    const dataNullLesson = '00000000-0000-0000-0000-000000000000';
    let data_menu = [];
    const [dataMenu, setDataMenu] = useState([]);
    const getData = async () => {
        try {
            const responseChapter = await request.get('chapters');
            const dataChapter = responseChapter.data.data;
            const responseUser = await request.get('/auth/me');
            const dataCurrentLesson = responseUser.data.user.current_lesson;

            if (dataCurrentLesson === dataNullLesson || dataCurrentLesson === dataChapter[1].lessons[0].id) {
                return;
            } else {
                let isSet = false;
                let flag = false;
                for (let chapter of dataChapter) {
                    if (chapter.level === 0) {
                        continue;
                    }
                    if (flag) {
                        break;
                    }
                    let dataMenuChapter = {
                        chapter_id: chapter.id,
                        chapter_name: chapter.name,
                        chapter_level: chapter.level,
                    };
                    let dataLessons = [];
                    for (const lesson of chapter.lessons) {
                        dataLessons.push({
                            lesson_id: lesson.id,
                            lesson_type: lesson.type,
                            lesson_name: lesson.name,
                        });
                        if (lesson.id === dataCurrentLesson) {
                            flag = true;
                        }
                        if (flag) {
                            break;
                        }
                    }
                    data_menu.push({
                        chapter: dataMenuChapter,
                        lessons: dataLessons,
                    });
                }
            }
            setDataMenu(data_menu);
        } catch (error) {
            console.log(error);
            notification.error({
                message: 'Lỗi lấy dữ liệu',
            });
        }
    };
    useEffect(() => {
        getData();
    }, []);

    // if (finishState) {
    //     finishState.forEach(function (item, idx) {
    //         let existing = data_menu.filter(function (v, i) {
    //             return v.chapter.chapter_id === item.chapter.chapter_id;
    //         });
    //         if (existing.length) {
    //             let existingIndex = data_menu.indexOf(existing[0]);
    //             data_menu[existingIndex].lesson = data_menu[existingIndex].lesson.concat(item.lesson);
    //         } else {
    //             if (typeof item.lesson === 'object') item.lesson = [item.lesson];
    //             data_menu.push(item);
    //         }
    //     });
    // }
    const handleItemSelected = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        console.log(key);
    };
    const getItem = (label, key, icon, children, type) => {
        let div = <div>{label}</div>;
        return {
            key,
            icon,
            children,
            label: div,
            type,
        };
    };
    const itemMenuLecture = [];
    const itemMenuPractice = [];
    dataMenu.forEach((chapter) => {
        const itemSubMenuLecture = [];
        const itemSubMenuPractice = [];
        chapter.lessons.forEach((item) => {
            let itemId = item.lesson_id;
            let itemUrl = <Link to={`/practice/${itemId}`}>{item.lesson_name}</Link>;
            if (item.lesson_type === 'lecture') itemSubMenuLecture.push(getItem(itemUrl, itemId));
            if (item.lesson_type === 'practice') itemSubMenuPractice.push(getItem(itemUrl, itemId));
        });
        itemMenuLecture.push(
            getItem(
                'Chapter ' + chapter.chapter.chapter_level.toString() + ': ' + chapter.chapter.chapter_name,
                chapter.chapter.chapter_id,
                null,
                itemSubMenuLecture,
            ),
        );
        itemMenuPractice.push(
            getItem(
                'Chapter ' + chapter.chapter.chapter_level.toString() + ': ' + chapter.chapter.chapter_name,
                chapter.chapter.chapter_id,
                null,
                itemSubMenuPractice,
            ),
        );
    });
    const itemsLecture = [
        getItem('Danh sách các chương đã học', '1', <FontAwesomeIcon icon={faBook} />, itemMenuLecture),
    ];
    const itemsPractice = [
        getItem(
            'Danh sách các bài tập của các chương đã làm',
            '2',
            <FontAwesomeIcon icon={faBook} />,
            itemMenuPractice,
        ),
    ];
    return (
        <>
            <Row>
                <Col span={24}>
                    <Row>
                        <h1 className={styles.contentTitle}>Góc học tập</h1>
                    </Row>
                    <Row className={styles.contentBox}>
                        <Col style={{ marginRight: 20 }}>
                            <img src="images/learning.png" alt="game" width={60} />
                        </Col>
                        <Col span={20}>
                            <Row>
                                <h1 style={{ marginBottom: 10, fontSize: 17 }}>Ôn lại các bài học cũ</h1>
                            </Row>
                            <Row>Đừng quên mỗi ngày bạn nên ôn lại các bài học cũ, củng cố lại kiến thức</Row>
                        </Col>
                    </Row>
                    <Menu
                        mode="inline"
                        items={itemsLecture}
                        onSelect={handleItemSelected}
                        className={styles.menu}
                    ></Menu>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <h1 className={styles.contentTitle}>Góc luyện tập</h1>
                            </Row>
                            <Row className={styles.contentBox}>
                                <Col style={{ marginRight: 20 }}>
                                    <img src="images/exercise.png" alt="game" width={60} />
                                </Col>
                                <Col span={20}>
                                    <Row>
                                        <h1 style={{ marginBottom: 10, fontSize: 17 }}>Xem lại các bài tập đã làm</h1>
                                    </Row>
                                    <Row>Hãy xem lại các bài tập đã làm để nhớ lâu hơn nhé</Row>
                                </Col>
                            </Row>
                            <Menu
                                mode="inline"
                                items={itemsPractice}
                                onSelect={handleItemSelected}
                                className={styles.menu}
                            ></Menu>
                            <Row className={styles.contentBox}>
                                <Col style={{ marginRight: 20 }}>
                                    <img src="images/game_practice.png" alt="game" width={60} />
                                </Col>
                                <Col span={20}>
                                    <Row>
                                        <h1 style={{ marginBottom: 10, fontSize: 17 }}>Trò chơi</h1>
                                    </Row>
                                    <Row>Bạn có thể chơi thêm nhiều trò chơi khác với những bài học mà bạn đã học</Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default memo(LearningMenu);
