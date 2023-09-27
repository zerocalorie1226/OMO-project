import styles from "./MyCourseSearchBox.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import Delete from "../Button/Delete/Delete";
import MyCourseCalendar from '../MyCourseCalendar/MyCourseCalendar';


const MyCourseSearchBox = () => (
  <div className={styles["mycourse-search-box-total-container"]}>
       <MyCourseCalendar/>
      
    <div className={styles["mycourse-search-box-button-container"]}>
      <button type="button" className={styles["mycourse-search-box-button-popular"]}>
        찜 목록에서 찾기
      </button>
      <button type="button" className={styles["mycourse-search-box-button-recent"]}>
        최근 본 목록에서 찾기
      </button>
      <button type="button" className={styles["mycourse-search-box-button-search"]}>
        검색을 통해 찾기
      </button>
    </div>
    <img src={downArrow} alt="아래 화살표" className={styles["mycourse-search-box-down-arrow-img"]} />
  </div>
);

export default MyCourseSearchBox;
