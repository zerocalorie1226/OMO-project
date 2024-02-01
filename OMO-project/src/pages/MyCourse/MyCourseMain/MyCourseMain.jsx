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
        <button className={styles["mycourse-header-left-button"]} onClick={decreaseMonth}>
          &lt;
        </button>
        <div className={styles["mycourse-header-date"]}>{headText}</div>
        <button className={styles["mycourse-header-right-button"]} onClick={increaseMonth}>
          &gt;
        </button>
      </div>

      <div className={styles["mycourse-list-container"]}>

      {/* 날짜 데이터를 Date 객체로 변환하고 필터링하여 현재 선택된 월에 해당하는 데이터가 없을 때에만 메시지를 표시 */}
        {data.length > 0 ? (
          <MyCourseList myCourseList={data} />
        ) : (
          <div>
            {myCourseList.filter((it) => { // myCourseList 배열의 각 요소에 대해 filter 함수를 사용하여 특정 조건을 만족하는 요소만 남김 (it은 배열의 각 요소를 나타냄)
              const courseDate = new Date(it.date); // it.date가 Date 객체가 아니라면 이를 Date 객체로 가정함
              return courseDate.getMonth() === curDate.getMonth() && courseDate.getFullYear() === curDate.getFullYear(); // 현재 선택된 월과 년도와 일치하는지를 확인
            }).length === 0 && <div className={styles["no-boardlist"]} >글 작성 내역이 없습니다. 우측 하단에 있는 글쓰기 버튼을 통해 게시글을 작성해주세요</div>}
          </div> // filter 함수를 통해 남은 요소가 없을 때 (즉, 현재 선택된 월에 해당하는 데이터가 없을 때), length는 0이 되며, 이때만 메시지를 표시 (&& 연산자를 사용하여 앞의 조건이 참일 때만 메시지를 표시)
        )}
      </div>
      <ScrollToTop />
      <Link to="/MyCourseNewWrite">
        <WritingButton />
      </Link>
    </div>
  );
};

export default MyCourseMain;
