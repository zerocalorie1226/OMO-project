import styles from "./MyCourseFindRecentModal.module.css";
import {MyCourseItemListBox} from "../MyCourseItemListBox/MyCourseItemListBox";
import {data} from "./../../../const/data";
import ModalClose from "./../../../assets/modal-close.png";
import {useEffect, useState} from "react";

const MyCourseFindRecentModal = ({recentModal, setRecentModal, state, setState, item, setItem, changeSetContent}) => {
  const [recentData, setRecentData] = useState([]);

  useEffect(() => {
    const storedRecentData = localStorage.getItem("recentData");
    if (storedRecentData) {
      setRecentData(JSON.parse(storedRecentData));
    }
  }, []);

  const handleClickItem = (item) => {
    setItem(item); // 받아온 id를 업데이트 해줌

    // console.log("모달창 id:", item);
  };

  return (
    <>
      <div className={styles["Overlay"]}>
        <div className={styles["mycourse-find-recent-modal-container"]}>
          <label className={styles["mycourse-find-recent-modal-title"]} htmlFor="find-recent">
            최근 본 장소에서 찾기
            <button
              className={styles["mycourse-find-recent-close-btn"]}
              type="button"
              onClick={() => {
                setRecentModal(false);
              }}
            >
              <img className={styles["mycourse-find-recent-close-btn-img"]} src={ModalClose} alt="닫기 아이콘" />
              {!recentModal ? setRecentModal(true) : null}
            </button>
          </label>

          <div className={styles["mycourse-find-recent-modal-list-box-container"]}>
            {recentData.length === 0 ? (
              <div className={styles["no-recent-list"]}>최근 본 장소가 없습니다.</div>
            ) : (
              <div>
                {recentData.map((el) => {
                  return <MyCourseItemListBox key={el.id} state={state} setState={setState} el={el} onClick={handleClickItem} changeSetContent={changeSetContent} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourseFindRecentModal;
