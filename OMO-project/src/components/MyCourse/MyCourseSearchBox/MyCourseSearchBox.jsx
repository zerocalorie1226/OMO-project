import { useState } from "react";
import styles from "./MyCourseSearchBox.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import Delete from "../Button/Delete/Delete";
import MyCourseCalendar from "../MyCourseCalendar/MyCourseCalendar";
import FindButton from "./FindButton/FindButton";
import MyCourseFindInterestModal from "../MyCourseFindInterestModal/MyCourseFindInterestModal";
import MyCourseFindRecentModal from "../MyCourseFindRecentModal/MyCourseFindRecentModal";
import MyCourseFindSearchModal from "../MyCourseFindSearchModal/MyCourseFindSearchModal";

const MyCourseFindBox = () => {
  
  const [interestModal, setInterestModal] = useState(false);
  const [recentModal, setRecentModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  return (
    <div className={styles["mycourse-find-box-total-container"]}>
      <MyCourseCalendar />

      <div className={styles["mycourse-find-box-button-container"]}>
        <FindButton text={"관심 목록에서 찾기"} onClick={() => { setInterestModal(true) }} type={"interest"} />
        {interestModal === true ?  <MyCourseFindInterestModal/> : null }
        <FindButton text={"최근 본 목록에서 찾기"} onClick={() =>{ setRecentModal(true) }} type={"recent"} />
        {recentModal === true ?  <MyCourseFindRecentModal/> : null }
        <FindButton text={"검색을 통해 찾기"} onClick={() => { setSearchModal(true) }} type={"search"} />
        {searchModal=== true ?  <MyCourseFindSearchModal/> : null }
      </div>
      <img src={downArrow} alt="아래 화살표" className={styles["mycourse-find-box-down-arrow-img"]} />
    </div>

    // <MyCourseFindInterestModal/>
    // <MyCourseFindRecentModal/>
    // <MyCourseFindSearchModal/>
  );
};
export default MyCourseFindBox;

// interset
// recent
// search
