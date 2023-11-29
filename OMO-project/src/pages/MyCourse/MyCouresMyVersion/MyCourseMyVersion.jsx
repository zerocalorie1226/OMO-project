import styles from "./MyCouresMyVersion.module.css";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {data} from "../../../const/data";
import MyCourseDataBox from "../../../components/MyCourse/MyCourseDataBox/MyCourseDataBox";
import MyCourseCalendar from "./../../../components/MyCourse/MyCourseCalendar/MyCourseCalendar";
import Share from "../../../components/MyCourse/Button/Share/Share";
import Edit from "../../../components/MyCourse/Button/Edit/Edit";
import downArrow from "../../../assets/my-course/write/down-arrow.png";

const MyCourseMyVersion = () => {
  const myCourseMyVersion1 = data.find((item) => item.id === 1);
  const myCourseMyVersion2 = data.find((item) => item.id === 2);
  const myCourseMyVersion8 = data.find((item) => item.id === 8);
  return (
    <div className={styles["mycourse-myversion-total-container"]}>
      <div className={styles["mycourse-myversion-title-container"]}>
        <span className={styles["mycourse-myversion-title"]}>킹부엉의 인천 맛집 탐방</span>
      </div>
      <div className={styles["mycourse-myversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox key={myCourseMyVersion1.id} {...myCourseMyVersion1} />
      <img src={downArrow} alt="아래 화살표" className={styles["mycourse-find-box-down-arrow-img"]} />
      <div className={styles["mycourse-myversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox key={myCourseMyVersion2.id} {...myCourseMyVersion2} />
      <img src={downArrow} alt="아래 화살표" className={styles["mycourse-find-box-down-arrow-img"]} />
      <div className={styles["mycourse-myversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox key={myCourseMyVersion8.id} {...myCourseMyVersion8} />

      <div className={styles["mycourse-myversion-edit-share-button-container"]}>
        <Edit /> <Share />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default MyCourseMyVersion;
