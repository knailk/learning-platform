import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.css';
const RankingPage = () => {
    return (
        <>
            <div className={clsx(style.content)}>RankingPage</div>
        </>
    );
};

export default memo(RankingPage);
