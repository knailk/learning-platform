import { Button } from 'antd';
import React, { memo } from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const ItemSideBar = ({ children, ...props }) => {
    return (
        <>
            <Link key={props.key} to={props.url}>
                {props.inMenu && (
                    <div
                        className={clsx(style.itemNavBar, {
                            [style.itemActive]: props.isActive,
                        })}
                    >
                        <div className={style.imgItem}>
                            <img alt="img" src={props.imgSrc} width={30} />
                        </div>
                        <span className={style.titleItem}>{props.title}</span>
                    </div>
                )}
                {!props.inMenu && (
                    <div className={clsx(style.itemNavBarMore)}>
                        <span className={style.titleItemMore}>{props.title}</span>
                    </div>
                )}
            </Link>
        </>
    );
};

export default memo(ItemSideBar);
