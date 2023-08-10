import styles from "./NoticeItems.module.css";

const NoticeItems = (props) => (
  <div className={styles["notice-main-subTitle-free-container"]}>
    <a href="#" className={styles["notice-main-subTitle-free-division"]}>
      {props.division}
    </a>
    <a href="#" className={styles["notice-main-subTitle-free-title"]}>
      {props.title}
    </a>
    <a href="#" className={styles["notice-main-subTitle-free-date"]}>
      {props.date}
    </a>
  </div>
);

export default NoticeItems;
