import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.css';
const Profile = () => {
    return (
        <>
            <div className={clsx(style.content)}>Profile</div>
        </>
    );
};

export default memo(Profile);
