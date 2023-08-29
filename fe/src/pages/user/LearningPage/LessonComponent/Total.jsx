import { memo } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import { Col, Row } from "antd";

const Total = ({ ...props }) => {
    console.log(props);
    return (
        <>
            <div className={styles.totalWrapper}>
                <Row className={styles.congraImg}>
                    <img src="images/congratulations.png" alt="congra" />
                </Row>
                <Row className={styles.contentCongra}>
                    <h1>
                        Chúc mừng bạn đạt được {props.data} điểm trong bài tập
                        này
                    </h1>
                </Row>
                <Row
                    className={styles.contentCongra}
                    style={{ fontSize: 15, fontWeight: 500, marginTop: 20 }}
                >
                    <span>
                        Điểm sẽ được lưu lại để có thể tham gia bảng xếp hạng
                        bạn nhé!
                    </span>
                </Row>
            </div>
        </>
    );
};
export default memo(Total);
