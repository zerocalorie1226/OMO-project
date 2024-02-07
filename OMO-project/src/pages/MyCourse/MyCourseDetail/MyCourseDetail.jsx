// 상세페이지

import styles from "./MyCourseDetail.module.css";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {data} from "../../../const/data";
import MyCourseDataBox from "../../../components/MyCourse/MyCourseDataBox/MyCourseDataBox";
import MyCourseCalendar from "../../../components/MyCourse/MyCourseCalendar/MyCourseCalendar";
import Share from "../../../components/MyCourse/Button/Share/Share";
import Edit from "../../../components/MyCourse/Button/Edit/Edit";
// import downArrow from "../../../assets/my-course/write/down-arrow.png";
import {useNavigate, useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {MyCourseStateContext} from "../../../App";
import MyCourseDetailBox from "../../../components/MyCourseDetailBox/MyCourseDetailBox";``
import downArrow from "../../../assets/my-course/write/down-arrow.png";

const MyCourseDetail = () => {
  const {id} = useParams();
  const myCourseList = useContext(MyCourseStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();
  const getStringDate = (date) => {
    const options = {year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: false};
    return new Intl.DateTimeFormat("ko-KR", options).format(date);
  };

  useEffect(() => {
    if (myCourseList.length >= 1) {
      const targetMyCourse = myCourseList.find((it) => parseInt(it.id) === parseInt(id));
      // console.log(targetMyCourse);

      if (targetMyCourse) {
        setData(targetMyCourse);
      } else {
        // alert("존재하지 않는 코스입니다.")
        navigate("/MyCourseMain", {replace: true});
      }
    }
  }, [id, myCourseList]);
  if (!data) {
    return <div className={styles["loading"]}>로딩중입니다...</div>;
  } else {
    // content가 객체인 경우 문자열로 변환
    // const contentText = typeof data.content === "object" ? JSON.stringify(data.content) : data.content;

    // console.log("content들어왔니?: ", data.content);
    console.log("디테일 data: ", data);
    const newContent3 = data.content;

    return (
      <div className={styles["mycourse-detail-total-container"]}>
        <div className={styles["mycourse-detail-title-container"]}>
          <span>{data.title}</span>
        </div>
        <div className={styles["mycourse-detail-course-container"]}>
          <div className={styles["mycourse-detail-course-item-container"]}>
            {/* <div className={styles["mycourse-detail-calendar-container"]}>{getStringDate(new Date(data.dates))}</div> */}
            <div className={styles["mycourse-detail-calendar-container"]}>{data.dates}</div>
            {newContent3.map((el, index) => (
              <React.Fragment key={index}>
                <MyCourseDetailBox {...el} />
                {index !== newContent3.length - 1 && <img src={downArrow} className={styles["mycourse-data-box-down-arrow-img"]} />}
              {/* 현재 요소가 배열의 맨 마지막 요소가 아닌 경우에만 화살표 이미지를 렌더링한다 */}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={styles["mycourse-detail-edit-share-button-container"]}>
          <Edit /> <Share />
        </div>
        <ScrollToTop />
      </div>
    );
  }
};

export default MyCourseDetail;
