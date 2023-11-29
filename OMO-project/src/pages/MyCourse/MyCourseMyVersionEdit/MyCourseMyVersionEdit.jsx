import styles from "./MyCourseMyVersionEdit.module.css";
import MyCoursePlusBox from "../../../components/MyCourse/MyCoursePlusBox/MyCoursePlusBox";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import Save from "../../../components/MyCourse/Button/Save/Save";
import {data} from "../../../const/data";
import MyCourseDataBox from "../../../components/MyCourse/MyCourseDataBox/MyCourseDataBox";
import MyCourseCalendar from './../../../components/MyCourse/MyCourseCalendar/MyCourseCalendar';

const MyCourseMyVersionEdit = () => {
  const myCourseMyVersionEdit1 = data.find((item) => item.id === 1);
  const myCourseMyVersionEdit2 = data.find((item) => item.id === 2);
  const myCourseMyVersionEdit7 = data.find((item) => item.id === 7);
  return (
    <div className={styles["mycourse-myversion-edit-total-container"]}>
      <div className={styles["mycourse-myversion-edit-title-container"]}>
        <span className={styles["mycourse-myversion-edit-title"]}>킹부엉의 인천 맛집 탐방</span>
      </div>
      <div className={styles["mycourse-myversion-edit-calendar-container"]}><MyCourseCalendar/></div>
      <MyCourseDataBox
        key={myCourseMyVersionEdit1.id} {...myCourseMyVersionEdit1}
      />
      <div className={styles["mycourse-myversion-edit-calendar-container"]}><MyCourseCalendar/></div>
      <MyCourseDataBox
        key={myCourseMyVersionEdit2.id} {...myCourseMyVersionEdit2}
      />
      <div className={styles["mycourse-myversion-edit-calendar-container"]}><MyCourseCalendar/></div>
      <MyCourseDataBox
        key={myCourseMyVersionEdit7.id} {...myCourseMyVersionEdit3}
      />

      <MyCoursePlusBox />
      <Save />
      <ScrollToTop />
    </div>
  );
};

export default MyCourseMyVersionEdit;
