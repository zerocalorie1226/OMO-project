import styles from "./MyCourseDetail.module.css";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import Share from "../../../components/MyCourse/Button/Share/Share";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import MyCourseDetailBox from "../../../components/MyCourseDetailBox/MyCourseDetailBox";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import {Loading} from "../../../components/Loading/Loading";
import Like from "../../../assets/community/my-course-board/empty-thumb.png";
import LikeClicked from "../../../assets/detail/purple-thumb.png";
import { formatDate } from "../../../utils/Time/formatDate";

const MyCourseDetail = () => {
  const {id} = useParams();
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getStringDate = (date) => {
    const options = {year: "numeric", month: "2-digit", day: "2-digit"};
    return new Intl.DateTimeFormat("ko-KR", options).format(new Date(date));
  };

  // 좋아요 버튼 (이미지, 클릭토글)
  const [imageSrcLike, setImageSrcLike] = useState(Like);
  const [isClickedLike, setIsClickedLike] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/mycourse/${id}`, {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });
        setDetailData(response.data);
        console.log("코스상세데이터: ", response.data);
        setLoading(false);
      } catch (error) {
        setError("데이터를 불러오는 데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // 좋아요 버튼
  const handleClickLike = async () => {
    try {
      const response = await axios.put(
        `https://api.oneulmohae.co.kr/mycourse/like/${detailData.courseId}`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log(response);
        console.log("isClickedLike: ", isClickedLike);
        const getResponse = await axios.get(`https://api.oneulmohae.co.kr/mycourse/${id}`, {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });
        if (getResponse.status === 200) {
          console.log(getResponse);
          // 이미지 변경 및 카운트 업데이트
          if (isClickedLike) {
            setImageSrcLike(Like);
            setIsClickedLike(false);
          } else {
            setImageSrcLike(LikeClicked);
            setIsClickedLike(true);
          }
          setDetailData(getResponse.data);
        } else {
          console.error("게시글을 가져오는데 실패하였습니다.");
        }
      } else {
        console.error("게시글을 가져오는데 실패하였습니다.");
      }
    } catch (error) {
      console.error("게시글을 가져오는데 실패하였습니다.:", error);
    }
  };

  // like 값을 사용하여 초기 상태 설정 (따봉 누른 것들 새로고침해도 유지하게끔)
  useEffect(() => {
    if (detailData) {
      if (detailData.myLiked) {
        setImageSrcLike(LikeClicked);
        setIsClickedLike(true);
      } else {
        setImageSrcLike(Like);
        setIsClickedLike(false);
      }
    }
  }, [detailData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className={styles["error"]}>{error}</div>;
  }

  return (
    <div className={styles["mycourse-detail-total-container"]}>
      <div className={styles["mycourse-detail-title-container"]}>
        <span>
          {detailData.writerName}의 {detailData.courseName}
        </span>
      </div>
      <div className={styles["mycourse-detail-like-container"]}>
        <button className={styles["mycourse-detail-like-button"]} onClick={handleClickLike} type="button">
          {" "}
          <img src={imageSrcLike} alt="좋아요 아이콘" />{" "}
        </button>{" "}
        <span className={styles["community-mycourse-detail-like-number"]}> {detailData.likeCount}</span>
      </div>
      <div className={styles["mycourse-detail-created-date"]}>
        <span>작성 일자: {getStringDate(detailData.createdAt)}</span>
      </div>
      <div className={styles["mycourse-detail-course-container"]}>
        <div className={styles["mycourse-detail-course-item-container"]}>
          {/* content와 time를 함께 순회하여 각 쌍의 요소를 렌더링 */}
          {detailData.contents.map((contentItem, index) => (
            <React.Fragment key={index}>
              <div className={styles["mycourse-detail-calendar-container"]}>{formatDate(contentItem.time)}</div>
              <MyCourseDetailBox {...contentItem} />
              {index !== detailData.contents.length - 1 && <img src={downArrow} className={styles["mycourse-data-box-down-arrow-img"]} />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={styles["mycourse-detail-edit-share-button-container"]}>{/* <Share /> */}</div>
      <ScrollToTop />
    </div>
  );
};

export default MyCourseDetail;
