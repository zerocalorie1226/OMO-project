import styles from "./MyCourseOthersVersion.module.css";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {data} from "../../../const/data";
import MyCourseDataBox from "../../../components/MyCourse/MyCourseDataBox/MyCourseDataBox";
import ComeBackList from "../../../components/MyCourse/Button/ComeBackList/ComeBackList";
import MyCourseCalendar from "./../../../components/MyCourse/MyCourseCalendar/MyCourseCalendar";
import {Link} from "react-router-dom";

const MyCourseOthersVersion = () => {
  const MyCourseOthersVersion1 = data.find((item) => item.id === 1);
  const MyCourseOthersVersion2 = data.find((item) => item.id === 2);
  const MyCourseOthersVersion8 = data.find((item) => item.id === 8);
  return (
    <div className={styles["mycourse-othersversion-total-container"]}>
      <div className={styles["mycourse-othersversion-title-container"]}>
        <span className={styles["mycourse-othersversion-title"]}>킹부엉의 인천 맛집 탐방</span>
      </div>
      <div className={styles["mycourse-othersversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox
        key={MyCourseOthersVersion1.id} {...MyCourseOthersVersion1}
      />
      <div className={styles["mycourse-othersversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox
        key={MyCourseOthersVersion2.id} {...MyCourseOthersVersion2}
      />
      <div className={styles["mycourse-othersversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox
        key={MyCourseOthersVersion8.id} {...MyCourseOthersVersion8}
      />
      <Link to="/MyCourseBoard">
        <ComeBackList />
      </Link>
      <ScrollToTop />
    </div>
  );
};

export default MyCourseOthersVersion;
