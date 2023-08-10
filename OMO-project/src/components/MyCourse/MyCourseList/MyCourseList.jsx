import styles from "./MyCourseList.module.css";

const MyCourseList = (props) => (
  <a href="#" className={styles["MycourseList-container"]}>
    <p className={styles["MycourseList-title"]}>{props.title}</p>
    <p className={styles["MycourseList-date"]}>{props.date}</p>
  </a>
);

export default MyCourseList;
