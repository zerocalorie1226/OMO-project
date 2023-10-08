import styles from "./MyCourseAfter.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import MyCourseFindBox from "../MyCourseFindBox/MyCourseFindBox";
import MyCoursePlusBox from "../MyCoursePlusBox/MyCoursePlusBox";
import Delete from "../Button/Delete/Delete";

const MyCourseAfter = () => (
  <div className={styles["mycourse-after-total-container"]}>
    <MyCourseFindBox />

    <MyCoursePlusBox />
  </div>
);

export default MyCourseAfter;
