import React, {useState} from "react";
import styles from "./MyCourseFindBox.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import Delete from "../Button/Delete/Delete";
import MyCourseCalendar from "../MyCourseCalendar/MyCourseCalendar";
import MyCourseDataBox from "../MyCourseDataBox/MyCourseDataBox";
import FindButton from "./FindButton/FindButton";
import MyCourseFindInterestModal from "../MyCourseFindInterestModal/MyCourseFindInterestModal";
import MyCourseFindRecentModal from "../MyCourseFindRecentModal/MyCourseFindRecentModal";
import MyCourseFindSearchModal from "../MyCourseFindSearchModal/MyCourseFindSearchModal";
import {data} from "../../../const/data";

const MyCourseFindBox = ({date, setDate }) => {
  const [interestModal, setInterestModal] = useState(false);
  const [recentModal, setRecentModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [isFindBoxVisible, setFindBoxVisible] = useState(true); // Add this state

  const handleDeleteClick = () => {
    setFindBoxVisible(false);
    alert("삭제되었습니다.");
  };

  const [item, setItem] = useState(); // id의 상태

  const [state, setState] = useState(false);

  const findItem = data.find((el) => el.id === item);

  return (
    <>
      {isFindBoxVisible && (
        <div className={styles["mycourse-find-box-total-container"]}>
          <MyCourseCalendar date={date} setDate={setDate}/>
          <Delete onClick={handleDeleteClick} />

          {state ? (
            // findItem.map((el) => {
            //   return <MyCourseItemListBox key={el.id} {...el}/>;
            // })
            <MyCourseDataBox key={findItem.id} data={findItem} />
          ) : (
            <div className={styles["mycourse-find-box-button-container"]}>
              <FindButton
                text={"관심 목록에서 찾기"}
                onClick={() => {
                  setInterestModal(true);
                }}
              />
              {interestModal ? <MyCourseFindInterestModal item={item} setItem={setItem} state={state} setState={setState} interestModal={interestModal} setInterestModal={setInterestModal} /> : null}

              <FindButton
                text={"최근 본 목록에서 찾기"}
                onClick={() => {
                  setRecentModal(true);
                }}
              />
              {recentModal ? <MyCourseFindRecentModal state={state} setState={setState} recentModal={recentModal} setRecentModal={setRecentModal} /> : null}

              <FindButton
                text={"검색을 통해 찾기"}
                onClick={() => {
                  setSearchModal(true);
                }}
              />
              {searchModal ? <MyCourseFindSearchModal state={state} setState={setState} searchModal={searchModal} setSearchModal={setSearchModal} /> : null}
            </div>
          )}

          <img src={downArrow} alt="아래 화살표" className={styles["mycourse-find-box-down-arrow-img"]} />
        </div>
      )}
    </>
  );
};
export default MyCourseFindBox;
