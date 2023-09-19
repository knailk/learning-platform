import styles from './style.module.scss';
import ItemMap from './ItemMap';
import './customStyle.scss';

const GameCodePage = () => {
    const itemMap = {
        title: 'Shadow Guard',
        description:
            'Hãy né lũ yêu tinh để nhặt kim cương và đến cánh cổng bên kia một cách an toàn. Coi chừng gai nhọn',
        level: 1,
    };
    return (
        <>
            <div className={styles.gameCodePageWrapper}>
                <div className={styles.gameMap}>
                    <img src="/images/game/Dungeon_Map.jpg" alt="" />
                    <div className={styles.linearLeft}></div>
                    <div className={styles.linearRight}></div>
                    <div className={styles.linearTop}></div>
                    <div className={styles.linearBottom}></div>
                    <ItemMap left={'9%'} bottom={'25.5%'} data={itemMap} />
                    <ItemMap left={'20%'} bottom={'20.5%'} data={itemMap} />
                    <ItemMap left={'30%'} bottom={'20.5%'} data={itemMap} />
                    <ItemMap left={'40%'} bottom={'22.5%'} data={itemMap} />
                </div>
            </div>
        </>
    );
};
export default GameCodePage;