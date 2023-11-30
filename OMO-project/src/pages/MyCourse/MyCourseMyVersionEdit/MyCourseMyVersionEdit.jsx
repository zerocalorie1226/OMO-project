import styles from "./MyCourseMyVersionEdit.module.css";
import pencil from "../../../assets/my-course/write/gray-pencil.png";
import MyCourseFindBox from "./../../../components/MyCourse/MyCourseFindBox/MyCourseFindBox";
import MyCourseAfter from "../../../components/MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import Save from "../../../components/MyCourse/Button/Save/Save";


const MyCourseMyVersionEdit = () => {
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

export default MyCourseMyVersionEdit;
