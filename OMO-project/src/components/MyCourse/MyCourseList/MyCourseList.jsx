import styles from "./MyCourseList.module.css";
import {Link} from "react-router-dom";

const MyCourseList = (props) => (
  <Link to="/MyCourseMyVersion" className={styles["mycourse-list-container"]}>
    <p className={styles["mycourse-list-title"]}>{props.title}</p>
    <p className={styles["mycourse-list-date"]}>{props.reg_at}</p>
  </Link>
);

export default MyCourseList;
