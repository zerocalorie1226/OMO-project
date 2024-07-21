import styles from "./MyCourseFindRecentModal.module.css";
import { MyCourseItemListBox } from "../MyCourseItemListBox/MyCourseItemListBox";
import ModalClose from "./../../../assets/modal-close.png";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { Loading } from "../../Loading/Loading";

const MyCourseFindRecentModal = ({ recentModal, setRecentModal, state, setState, setPlaceName, setPlaceId }) => {
  const [recentData, setRecentData] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(true);

  const observer = useRef();

  useEffect(() => {
    const fetchRecentData = async () => {
      const storedRecentData = localStorage.getItem("recentData");
      if (storedRecentData) {
        const parsedData = JSON.parse(storedRecentData);

        const placeNameList = parsedData.map((place) => place.place_name);
        const placeIdList = parsedData.map((place) => place.id);

        const postData = {
          placeNameList: placeNameList,
          placeIdList: placeIdList,
        };

        try {
          const response = await axios.post("https://api.oneulmohae.co.kr/place/recent", postData, {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
          });
          setRecentData(response.data);
          setMaxPage(Math.ceil(response.data.length / 10)); // 페이지 수 계산
        } catch (error) {
          console.error("최근 본 목록을 가져오는 중 오류가 발생했습니다.", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchRecentData();
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
          {loading ? (
            <Loading />
          ) : recentData.length === 0 ? (
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourseFindRecentModal;
