import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.css';

const HomePage = () => {
    return (
        <>
            <div className={clsx(style.content)}>CONTENT</div>
        </>
    );
};

export default memo(HomePage);
