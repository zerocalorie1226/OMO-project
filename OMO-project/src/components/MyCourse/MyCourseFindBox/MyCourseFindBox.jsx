import React, { useEffect, useState } from "react";
import styles from "./MyCourseFindBox.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import Delete from "../Button/Delete/Delete";
import MyCourseCalendar from "../MyCourseCalendar/MyCourseCalendar";
import MyCourseDataBox from "../MyCourseDataBox/MyCourseDataBox";
import FindButton from "./FindButton/FindButton";
import MyCourseFindInterestModal from "../MyCourseFindInterestModal/MyCourseFindInterestModal";
import MyCourseFindRecentModal from "../MyCourseFindRecentModal/MyCourseFindRecentModal";
import MyCourseFindRecommendModal from "../MyCourseFindRecommendModal/MyCourseFindRecommendModal";
import axios from "axios";

const MyCourseFindBox = ({ time, setTime, content, setContent, idx }) => {
  const [interestModal, setInterestModal] = useState(false);
  const [recentModal, setRecentModal] = useState(false);
  const [recommendModal, setRecommendModal] = useState(false);
  const [isFindBoxVisible, setFindBoxVisible] = useState(true);
  const [item, setItem] = useState(null); // place_name 상태
  const [findItem, setFindItem] = useState(null); // findItem 초기값을 null로 설정
  const [state, setState] = useState(false);

  const handleDeleteClick = () => {
    setFindBoxVisible(false);
    alert("삭제되었습니다.");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (item) {
        try {
          const response = await axios.get(`https://api.oneulmohae.co.kr/place/name/${item}?page=1`);
          console.log("전체데이터: ", response.data);
          if (response.data.documents && response.data.documents.length > 0) {
            const foundItem = response.data.documents[0]; // 첫 번째 결과를 가져옴
            console.log("foundItem: ", foundItem);
            setFindItem(foundItem);
          } else {
            setFindItem(null);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [item]);

  useEffect(() => {
    if (findItem) {
      changeSetContent(findItem);
    }
  }, [findItem]);

  const changeSetContent = (arrayEl) => {
    setContent(prevContent => {
      const newContent = [...prevContent, arrayEl];
      return newContent;
    });
  };

  console.log("콘텐트: ", content);

  return (
    <>
      {isFindBoxVisible && (
        <div className={styles["mycourse-find-box-total-container"]}>
          <MyCourseCalendar time={time} setTime={setTime} idx={idx} />
          <Delete onClick={handleDeleteClick} />

          {state && findItem ? (
            <MyCourseDataBox key={findItem.id} data={findItem} />
          ) : (
            <div className={styles["mycourse-find-box-button-container"]}>
              <FindButton
                text={"관심 목록에서 찾기"}
                onClick={() => {
                  setInterestModal(true);
                }}
              />
              {interestModal && (
                <MyCourseFindInterestModal
                  setItem={setItem}
                  setInterestModal={setInterestModal}
                  setState={setState}
                />
              )}

              <FindButton
                text={"추천한 장소에서 찾기"}
                onClick={() => {
                  setRecommendModal(true);
                }}
              />
              {recommendModal && (
                <MyCourseFindRecommendModal
                  setItem={setItem}
                  setRecommendModal={setRecommendModal}
                  setState={setState}
                />
              )}

              <FindButton
                text={"최근 본 장소에서 찾기"}
                onClick={() => {
                  setRecentModal(true);
                }}
              />
              {recentModal && (
                <MyCourseFindRecentModal
                  setItem={setItem}
                  setRecentModal={setRecentModal}
                  setState={setState}
                />
              )}
            </div>
          )}

          <img src={downArrow} alt="아래 화살표" className={styles["mycourse-find-box-down-arrow-img"]} />
        </div>
      )}
    </>
  );
};

export default MyCourseFindBox;
