// 나만의 코스 메인페이지 (Home)

import {useContext, useEffect, useState} from "react";
import MyCourseList from "../../../components/MyCourse/MyCourseList/MyCourseList";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import styles from "./MyCourseMain.module.css";
import {Link, useSearchParams} from "react-router-dom";
import {MyCourseStateContext} from "../../../App";

const MyCourseMain = () => {
  const myCourseList = useContext(MyCourseStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (myCourseList.length >= 1) {
      const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime();

      const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getTime();

      setData(myCourseList.filter((it) => firstDay <= it.date && it.date <= lastDay));
    }
  }, [myCourseList, curDate]);

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()));
  };

  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
  };

  return (
    <div className={styles["mycourse-container"]}>
      <h2 className={styles["mycourse-title"]}> 나만의 코스 </h2>

      <div className={styles["mycourse-header-container"]}>
        <button className={styles["mycourse-header-left-button"]} onClick={decreaseMonth}>&lt;</button>
        <div className={styles["mycourse-header-date"]}>{headText}</div>
        <button className={styles["mycourse-header-right-button"]} onClick={increaseMonth}>&gt;</button>
      </div>

      <div className={styles["mycourse-list-container"]}>
      <MyCourseList myCourseList={data} />
      </div>

      <ScrollToTop />
      <Link to="/MyCourseWrite">
        <WritingButton />
      </Link>
    </div>
  );
};

export default MyCourseMain;
