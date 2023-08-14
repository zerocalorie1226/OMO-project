import styles from "./MyCourseWriteBox.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import PlusButton from "../../../assets/my-course/write/plus.png";

const MyCourseWriteBox = () => (
  <div className={styles["myCourseWriteBox-total-container"]}>
    <div className={styles["myCourseWriteBox-button-container"]}>
      <button type="button" className={styles["myCourseWriteBox-button-popular"]}>
        찜 목록에서 찾기
      </button>
      <button type="button" className={styles["myCourseWriteBox-button-recent"]}>
        최근 본 목록에서 찾기
      </button>
      <button type="button" className={styles["myCourseWriteBox-button-search"]}>
        검색을 통해 찾기
      </button>
    </div>
    <img src={downArrow} alt="아래 화살표" className={styles["myCourseWriteBox-downArrow-img"]} />
    <div className={styles["myCoursePlusBox-total-container"]}>
      <a href="#" className={styles["myCoursePlusBox-plus-box"]}>
        <img src={PlusButton} alt="플러스 버튼" className={styles["myCoursePlusBox-plusButton"]} />
      </a>
    </div>
  </div>
);

export default MyCourseWriteBox;
