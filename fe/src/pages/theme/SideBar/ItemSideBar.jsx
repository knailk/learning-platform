import { Button } from 'antd';
import { memo } from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const ItemSideBar = ({ children, ...props }) => {
    return (
        <>
            <Link key={props.key} to={props.url}>
                <Button className={clsx(style.itemNavBar, { [style.itemActive]: props.isActive })}>
                    <div className={style.imgItem}>
                        <img alt="" src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" />
                    </div>
                    <span className={style.titleItem}>{props.title}</span>
                </Button>
            </Link>
        </>
    );
};

export default memo(ItemSideBar);
