// 나만의 코스 메인페이지 (Home)
import { useContext, useEffect, useState } from "react";
import MyCourseList from "../../../components/MyCourse/MyCourseList/MyCourseList";
import { ScrollToTop } from "../../../components/ScrollToTop/ScrollToTop";
import { WritingButton } from "../../../components/WritingButton/WritingButton";
import styles from "./MyCourseMain.module.css";
import { Link, useSearchParams } from "react-router-dom";
import { MyCourseStateContext } from "../../../App";

const MyCourseMain = () => {
  const myCourseList = useContext(MyCourseStateContext);
  // const [curDate] = useState(new Date());
  // const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // useEffect(() => {
  //   console.log("메인:", myCourseList);
  // }, [myCourseList, curDate]);

  return (
    <div className={styles["mycourse-container"]}>
      <h2 className={styles["mycourse-title"]}>나만의 코스</h2>

      <div className={styles["mycourse-header-container"]}>
        {/* increaseMonth와 decreaseMonth 관련 코드 삭제 */}
        {/* <div className={styles["mycourse-header-date"]}>{headText}</div> */}
        {/* increaseMonth와 decreaseMonth 관련 코드 삭제 */}
      </div>

      <div className={styles["mycourse-list-container"]}>
        <MyCourseList myCourseList={myCourseList} /> {/* 데이터 필터링 삭제 */}
      </div>
      <ScrollToTop />
      <Link to="/MyCourseNewWrite">
        <WritingButton />
      </Link>
    </div>
  );
};

export default MyCourseMain;
