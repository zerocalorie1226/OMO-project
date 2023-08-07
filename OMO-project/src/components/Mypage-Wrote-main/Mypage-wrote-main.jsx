import styles from "./Mypage-wrote-main.module.css";

const MypageWroteMain = () => (
  <div className={styles["myWrote-main-subTitle-free-container"]}>
    <a href="#" className={styles["myWrote-main-subTitle-free-division"]}>
      자유 게시판
    </a>
    <a href="#" className={styles["myWrote-main-subTitle-free-title"]}>
      이대로 가면...
    </a>
    <a href="#" className={styles["myWrote-main-subTitle-free-date"]}>
      07/12
    </a>
  </div>
);

export default MypageWroteMain;
