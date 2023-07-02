import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.css';
const StorePage = () => {
    return (
        <>
            <div className={clsx(style.content)}>StorePage</div>
        </>
    );
};

export default memo(StorePage);
