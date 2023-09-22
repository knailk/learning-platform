import styles from './style.module.scss';
import ItemMap from './ItemMap';
import { Helmet } from 'react-helmet';
import { Button, Row } from 'antd';
import './customStyle.scss';
import { Link } from 'react-router-dom';

const MappingLocation = [
    { left: '22.5%', top: '12.5%', current: true },
    { left: '30%', top: '17.5%' },
    { left: '40%', top: '16.5%' },
    { left: '50%', top: '20%' },
    { left: '45.5%', top: '30%' },
    { left: '32%', top: '34%' },
    { left: '20%', top: '36%' },
];

const GameCodePage = () => {
    const itemMap = {
        title: 'Shadow Guard',
        description:
            'Hãy né lũ yêu tinh để nhặt kim cương và đến cánh cổng bên kia một cách an toàn. Coi chừng gai nhọn',
        level: 1,
    };
    return (
        <>
            <Helmet>
                <title>Trò chơi lập trình</title>
            </Helmet>
            <div className={styles.gameCodePageWrapper}>
                <div className={styles.gameCodePageHeader}>
                    <Row className={styles.logo}>
                        <Link to={'/'}>
                            <img src="/images/game/logo_game.png" alt="" />
                        </Link>
                    </Row>
                </div>
                <div className={styles.gameMap}>
                    <img src="/images/game/Dungeon_Map1.jpg" alt="" />
                    <div className={styles.linearLeft}></div>
                    <div className={styles.linearRight}></div>
                    <div className={styles.linearTop}></div>
                    <div className={styles.linearBottom}></div>

                    {MappingLocation.map((item) => {
                        return <ItemMap left={item.left} top={item.top} current={item.current} data={itemMap} />;
                    })}
                </div>
            </div>
        </>
    );
};
export default GameCodePage;
