import { memo } from 'react';
import style from './style.module.css';
import ItemSideBar from './ItemSideBar';
import { ROUTERS } from '../../../utils/router';

const SideBar = () => {
    return (
        <>
            <div className={style.sideBar}>
                <div className={style.logo}>LOGO</div>
                <div className="nav"></div>
                <div className="navbar">
                    <ItemSideBar title="Learning" url={ROUTERS.USER.LEARNING} />
                    <ItemSideBar title="Practice" url={ROUTERS.USER.PRACTICE} />
                    <ItemSideBar title="Ranking" url={ROUTERS.USER.RANKING} />
                    <ItemSideBar title="Mission" url={ROUTERS.USER.MISSION} />
                    <ItemSideBar title="Store" url={ROUTERS.USER.STORE} />
                    <ItemSideBar title="Profile" url={ROUTERS.USER.PROFILE} />
                </div>
            </div>
        </>
    );
};

export default memo(SideBar);
