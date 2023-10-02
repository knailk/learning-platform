import styles from './style.module.scss';

const Guide = () => {
    return (
        <div className={styles.guideContainer}>
            <div className={styles.title}>Mục tiêu</div>
            <div className={styles.target}>Đi qua các điểm mục tiêu</div>
            <div className={styles.target}>Nhặt rương báu</div>
            <div className={styles.imageGuide}>
                <img src="/images/game/guide.png" alt="guide" />
            </div>
            <div className={styles.contentGuide}>Dùng code để viết chương trình điều khiển Thánh Gióng</div>
            <div className={styles.contentGuide}>
                Hãy viết code ở cửa sổ bên tay phải và nhấn nút CHẠY khi viết xong. Thánh Gióng sẽ đọc và di chuyển theo
                đúng các câu lệnh đó.
            </div>
            <div className={styles.contentGuide}>
                Thánh Gióng sẽ ngừng di chuyển nếu như bạn điều khiển Thánh Gióng đụng vào tường hoặc đã di chuyển theo
                hết các câu lệnh.
            </div>
            <div className={styles.contentGuide}>
                Hãy điều khiển Thánh Gióng đi qua các điểm mục tiêu và nhặt rương báu
            </div>
        </div>
    );
};
export default Guide;
