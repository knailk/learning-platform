import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.css';
const PracticePage = () => {
    return (
            <div className={clsx(style.content)}>PracticePage</div>
    );
};

export default memo(PracticePage);
