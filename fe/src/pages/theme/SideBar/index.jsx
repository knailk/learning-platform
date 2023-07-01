import { memo } from 'react';
import style from './style.module.css';

const SideBar = () => {
    return (
        <>
            <div className={style.sideBar}>
                <div className={style.logo}>LOGO</div>
            </div>
        </>
    );
};

export default memo(SideBar);
