import styles from "./MyCourseOthersVersion.module.css";
import pencil from "../../../assets/my-course/write/gray-pencil.png";
import MyCoursePlusBox from "../../../components/MyCourse/MyCoursePlusBox/MyCoursePlusBox";
import MyCourseFindBox from "../../../components/MyCourse/MyCourseFindBox/MyCourseFindBox";
import MyCourseAfter from "../../../components/MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import Save from "../../../components/MyCourse/Button/Save/Save";
import EditShare from "../../../components/MyCourse/Button/Edit-Share/Edit-Share";
import {data} from "../../../const/data";
import {ListBox} from "../../../components/ListBox/ListBox";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import MyCourseDataBox from "../../../components/MyCourse/MyCourseDataBox/MyCourseDataBox";
import ComeBackList from "../../../components/MyCourse/Button/ComeBackList/ComeBackList";
import MyCourseCalendar from "./../../../components/MyCourse/MyCourseCalendar/MyCourseCalendar";
import {Link} from "react-router-dom";

const MyCourseOthersVersion = () => {
  const MyCourseOthersVersion1 = data.find((item) => item.id === 1);
  const MyCourseOthersVersion2 = data.find((item) => item.id === 2);
  const MyCourseOthersVersion8 = data.find((item) => item.id === 8);
  return (
    <div className={styles["mycourseothersversion-total-container"]}>
      <div className={styles["mycourseothersversion-title-container"]}>
        <span className={styles["mycourseothersversion-title"]}>킹부엉의 인천 맛집 탐방</span>
      </div>
      <div className={styles["mycourseothersversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox
        key={MyCourseOthersVersion1.id}
        like={MyCourseOthersVersion1.like}
        jjim={MyCourseOthersVersion1.jjim}
        title={MyCourseOthersVersion1.title}
        addressBrief={MyCourseOthersVersion1.addressBrief}
        intro={MyCourseOthersVersion1.intro}
        runTime={MyCourseOthersVersion1.runTime}
        img1={MyCourseOthersVersion1.src1}
        img2={MyCourseOthersVersion1.src2}
        downArrow={MyCourseOthersVersion1.downarrow}
      />
      <div className={styles["mycourseothersversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox
        key={MyCourseOthersVersion2.id}
        like={MyCourseOthersVersion2.like}
        jjim={MyCourseOthersVersion2.jjim}
        title={MyCourseOthersVersion2.title}
        addressBrief={MyCourseOthersVersion2.addressBrief}
        intro={MyCourseOthersVersion2.intro}
        runTime={MyCourseOthersVersion2.runTime}
        img1={MyCourseOthersVersion2.src1}
        img2={MyCourseOthersVersion2.src2}
        downArrow={MyCourseOthersVersion2.downarrow}
      />
      <div className={styles["mycourseothersversion-calendar-container"]}>
        <MyCourseCalendar />
      </div>
      <MyCourseDataBox
        key={MyCourseOthersVersion8.id}
        like={MyCourseOthersVersion8.like}
        jjim={MyCourseOthersVersion8.jjim}
        title={MyCourseOthersVersion8.title}
        addressBrief={MyCourseOthersVersion8.addressBrief}
        intro={MyCourseOthersVersion8.intro}
        runTime={MyCourseOthersVersion8.runTime}
        img1={MyCourseOthersVersion8.src1}
        img2={MyCourseOthersVersion8.src2}
        downArrow={MyCourseOthersVersion8.downarrow}
      />
      <Link to="/MyCourseBoard">
        <ComeBackList />
      </Link>
      <ScrollToTop />
    </div>
  );
};

export default MyCourseOthersVersion;
