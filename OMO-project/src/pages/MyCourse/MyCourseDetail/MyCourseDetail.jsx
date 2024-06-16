// 상세페이지

import styles from "./MyCourseDetail.module.css";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import Share from "../../../components/MyCourse/Button/Share/Share";
import {useNavigate, useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {MyCourseStateContext} from "../../../assets/context/MyCourseContext"
import MyCourseDetailBox from "../../../components/MyCourseDetailBox/MyCourseDetailBox";
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
    console.log("디테일 data: ", data);

    const formatDate = (dateString) => {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      return new Date(dateString).toLocaleString("ko-KR", options);
    };

    return (
      <div className={styles["mycourse-detail-total-container"]}>
        <div className={styles["mycourse-detail-title-container"]}>
          <span>{data.title}</span>
        </div>
        <div className={styles["mycourse-detail-course-container"]}>
          <div className={styles["mycourse-detail-course-item-container"]}>
            {/* content와 dates를 함께 순회하여 각 쌍의 요소를 렌더링 */}
            {data.content.map((contentItem, index) => (
              <React.Fragment key={index}>
                <div className={styles["mycourse-detail-calendar-container"]}>{formatDate(data.dates[index])}</div>
                <MyCourseDetailBox {...contentItem} />
                {index !== data.content.length - 1 && <img src={downArrow} className={styles["mycourse-data-box-down-arrow-img"]} />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={styles["mycourse-detail-edit-share-button-container"]}>
          <Share />
        </div>
        <ScrollToTop />
      </div>
    );
  }
};

export default MyCourseDetail;
