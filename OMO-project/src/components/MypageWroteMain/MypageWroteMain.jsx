import styles from "./MypageWroteMain.module.css";

const MypageWroteMain = (props) => (
  <div className={styles["myWrote-main-subTitle-free-container"]}>
    <a href="#" className={styles["myWrote-main-subTitle-free-division"]}>
      {props.division}
    </a>
    <a href="#" className={styles["myWrote-main-subTitle-free-title"]}>
      {props.title}
    </a>
    <a href="#" className={styles["myWrote-main-subTitle-free-date"]}>
      {props.date}
    </a>
  </div>
);

export default MypageWroteMain;
