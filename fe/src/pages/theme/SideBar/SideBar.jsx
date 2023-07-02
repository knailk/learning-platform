import { memo, useState } from 'react';
import style from './style.module.css';
import ItemSideBar from './ItemSideBar';
import { ROUTERS } from '../../../utils/router';

const SideBar = () => {
    const [isActive, setStateActive] = useState('');
    console.log(isActive);
    const setState = (title) => {
        setStateActive(title);
    };
    return (
        <>
            <div className={style.sideBar}>
                <div className={style.logo}>LOGO</div>
                <div className="nav"></div>
                <div className="navbar">
                    {ROUTERS.MENU_NAV_BAR.map((item, index) => {
                        return (
                            <ItemSideBar
                                onClick={() => setState(item.title)}
                                key={index}
                                title={item.title}
                                url={item.path}
                                isActive={isActive === item.title}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default memo(SideBar);
