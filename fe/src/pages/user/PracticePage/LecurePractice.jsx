import React, { memo } from 'react';
import { useParams } from 'react-router-dom';

const LecturePractice = () => {
    const lessonId = useParams().lesson_id;
    console.log(lessonId);
    return <>Lecture</>;
};

export default memo(LecturePractice);
