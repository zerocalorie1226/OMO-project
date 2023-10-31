import styles from "./MyCourseWrite.module.css";
import pencil from "../../../assets/my-course/write/gray-pencil.png";
import MyCourseFindBox from "./../../../components/MyCourse/MyCourseFindBox/MyCourseFindBox";
import MyCoursePlusBox from "../../../components/MyCourse/MyCoursePlusBox/MyCoursePlusBox";
import MyCourseAfter from "../../../components/MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import Save from "../../../components/MyCourse/Button/Save/Save";
import EditShare from "../../../components/MyCourse/Button/Edit-Share/Edit-Share";
import {Link} from "react-router-dom";
import {useState} from "react";

const MyCourseWrite = () => {
  return (
    <div className={styles["mycourse-write-total-container"]}>
      <div className={styles["mycourse-write-title-container"]}>
        <input type="text" placeholder="나만의 코스" maxLength="10" className={styles["mycourse-write-input-title"]} />
        <img src={pencil} alt="연필" className={styles["mycourse-write-img-title"]} />
      </div>
      <MyCourseFindBox />
      <MyCourseAfter />

      <Save />

      <ScrollToTop />
    </div>
  );
};
export default MyCourseWrite;
