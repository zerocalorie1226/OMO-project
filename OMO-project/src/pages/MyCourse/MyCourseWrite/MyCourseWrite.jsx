import styles from "./MyCourseWrite.module.css";
import pencil from "../../../assets/my-course/write/gray-pencil.png";
import MyCourseWriteBox from "../../../components/MyCourse/MyCourseWriteBox/MyCourseWriteBox";

const MyCourseWrite = () => (
  <div className={styles["myCourseWrite-total-container"]}>
    <div className={styles["myCourseWrite-title-container"]}>
      <input type="text" placeholder="나만의 코스" maxLength="10" className={styles["myCourseWrite-input-title"]} />
      <img src={pencil} alt="연필" className={styles["myCourseWrite-img-title"]} />
    </div>
    <MyCourseWriteBox />
  </div>
);

export default MyCourseWrite;
