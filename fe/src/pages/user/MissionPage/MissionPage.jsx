import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.scss';
const MissionPage = () => {
    return <div className={clsx(style.content)}>Mission</div>;
};

export default memo(MissionPage);
