import { Button } from 'antd';
import { memo } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const ItemSideBar = ({ children, ...props }) => {
    return (
        <>
            <Link to={props.url}>
                <Button className={clsx(style.itemNavBar, [(style.itemActive = props.isActive)])}>{props.title}</Button>
            </Link>
        </>
    );
};

export default memo(ItemSideBar);
