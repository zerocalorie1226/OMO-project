import styles from "./MyCourseFindRecentModal.module.css";
import { MyCourseItemListBox } from "../MyCourseItemListBox/MyCourseItemListBox";
import ModalClose from "./../../../assets/modal-close.png";
import { useEffect, useState, useRef, useCallback } from "react";

const MyCourseFindRecentModal = ({ recentModal, setRecentModal, state, setState, setPlaceName, setPlaceId }) => {
  const [recentData, setRecentData] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef();

  useEffect(() => {
    const storedRecentData = localStorage.getItem("recentData");
    if (storedRecentData) {
      setRecentData(JSON.parse(storedRecentData));
    }
  }, []);

  useEffect(() => {
    // 모달이 열릴 때 배경 스크롤 막기
    document.body.style.overflow = 'hidden';
    return () => {
      // 모달이 닫힐 때 배경 스크롤 복원
      document.body.style.overflow = 'auto';
    };
  }, []);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pagination < maxPage) {
          setPagination((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, maxPage, pagination]
  );

  const handleClickItem = (place_name, id) => {
    setPlaceName(place_name);
    setPlaceId(id);
  };

  return (
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
              {recentData.slice(0, pagination * 10).map((el, index) => {
                if (index === recentData.slice(0, pagination * 10).length - 1) {
                  return (
                    <MyCourseItemListBox
                      ref={lastElementRef}
                      key={el.id}
                      state={state}
                      setState={setState}
                      el={el}
                      onClick={(place_name, id) => handleClickItem(place_name, id)}
                    />
                  );
                } else {
                  return (
                    <MyCourseItemListBox
                      key={el.id}
                      state={state}
                      setState={setState}
                      el={el}
                      onClick={(place_name, id) => handleClickItem(place_name, id)}
                    />
                  );
                }
              })}
              {loading && <div>Loading...</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourseFindRecentModal;
