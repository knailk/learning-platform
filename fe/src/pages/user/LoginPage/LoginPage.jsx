import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.css';
const LoginPage = () => {
    return (
        <>
            <div className={clsx(style.content)}>LoginPage</div>
        </>
    );
};

export default memo(LoginPage);
