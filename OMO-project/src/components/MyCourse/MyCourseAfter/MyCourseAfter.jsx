import styles from "./MyCourseAfter.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import MyCourseSearchBox from "../MyCourseSearchBox/MyCourseSearchBox";
import MyCoursePlusBox from "../MyCoursePlusBox/MyCoursePlusBox";

const MyCourseAfter = () => (
  <div className={styles["MyCourseAfter-total-container"]}>
    <MyCourseSearchBox />
    <MyCoursePlusBox />
  </div>
);

export default MyCourseAfter;
