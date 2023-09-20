import styles from "./MyCouresMyVersion.module.css";
import pencil from "../../../assets/my-course/write/gray-pencil.png";
import MyCoursePlusBox from "../../../components/MyCourse/MyCoursePlusBox/MyCoursePlusBox";
import MyCourseSearchBox from "../../../components/MyCourse/MyCourseSearchBox/MyCourseSearchBox";
import MyCourseAfter from "../../../components/MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import Save from "../../../components/MyCourse/Button/Save/Save";
import EditShare from "../../../components/MyCourse/Button/Edit-Share/Edit-Share";
import {data} from "../../../const/data";
import {ListBox} from "../../../components/ListBox/ListBox";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import MyCourseDataBox from "../../../components/MyCourse/MyCourseDataBox/MyCourseDataBox";
import MyCourseCalendar from "./../../../components/MyCourse/MyCourseCalendar/MyCourseCalendar";
import {Link} from "react-router-dom";

const MyCourseMyVersion = () => {
  const myCourseMyVersion1 = data.find((item) => item.id === 1);
  const myCourseMyVersion2 = data.find((item) => item.id === 2);
  const myCourseMyVersion8 = data.find((item) => item.id === 8);
  return (
    <div className={styles["mycoursemyversion-total-container"]}>
      <div className={styles["mycoursemyversion-title-container"]}>
        <span className={styles["mycoursemyversion-title"]}>킹부엉의 인천 맛집 탐방</span>
      </div>
      <div className={styles["mycoursemyversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox
        key={myCourseMyVersion1.id}
        like={myCourseMyVersion1.like}
        jjim={myCourseMyVersion1.jjim}
        title={myCourseMyVersion1.title}
        addressBrief={myCourseMyVersion1.addressBrief}
        intro={myCourseMyVersion1.intro}
        runTime={myCourseMyVersion1.runTime}
        img1={myCourseMyVersion1.src1}
        img2={myCourseMyVersion1.src2}
        downArrow={myCourseMyVersion1.downarrow}
      />
      <div className={styles["mycoursemyversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox
        key={myCourseMyVersion2.id}
        like={myCourseMyVersion2.like}
        jjim={myCourseMyVersion2.jjim}
        title={myCourseMyVersion2.title}
        addressBrief={myCourseMyVersion2.addressBrief}
        intro={myCourseMyVersion2.intro}
        runTime={myCourseMyVersion2.runTime}
        img1={myCourseMyVersion2.src1}
        img2={myCourseMyVersion2.src2}
        downArrow={myCourseMyVersion2.downarrow}
      />
      <div className={styles["mycoursemyversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox
        key={myCourseMyVersion8.id}
        like={myCourseMyVersion8.like}
        jjim={myCourseMyVersion8.jjim}
        title={myCourseMyVersion8.title}
        addressBrief={myCourseMyVersion8.addressBrief}
        intro={myCourseMyVersion8.intro}
        runTime={myCourseMyVersion8.runTime}
        img1={myCourseMyVersion8.src1}
        img2={myCourseMyVersion8.src2}
        downArrow={myCourseMyVersion8.downarrow}
      />

      <EditShare />

      <ScrollToTop />
    </div>
  );
};

export default MyCourseMyVersion;
