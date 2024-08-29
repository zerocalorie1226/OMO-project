import styles from "./MyCourseFindRecommendModal.module.css";
import {MyCourseItemListBox} from "../MyCourseItemListBox/MyCourseItemListBox";
import ModalClose from "./../../../assets/modal-close.png";
import {useEffect, useState, useRef, useCallback} from "react";
import axios from "axios";
import {Loading} from "../../Loading/Loading";

const MyCourseFindRecommendModal = ({recommendModal, setRecommendModal, state, setState, setPlaceName, setPlaceId}) => {
  const [recommendPosts, setRecommendPosts] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef();

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.oneulmohae.co.kr/myPage/recommend?page=${page}&size=10`, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      });

      // response.data가 null인 경우 빈 배열로 대체
      const posts = response.data ? response.data : [];

      setRecommendPosts((prevPosts) => [...prevPosts, ...posts]);
      setMaxPage(response.data?.totalPages || 0);
    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다.", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (loading || pagination >= maxPage) return;
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPagination((prevPage) => prevPage + 1);
    }
  }, [loading, pagination, maxPage]);

  useEffect(() => {
    fetchData(pagination);
  }, [pagination]);

  useEffect(() => {
    // 모달이 열릴 때 배경 스크롤 막기
    document.body.style.overflow = "hidden";
    window.addEventListener("scroll", handleScroll);
    return () => {
      // 모달이 닫힐 때 배경 스크롤 복원
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleClickItem = (place_name, id) => {
    setPlaceName(place_name);
    setPlaceId(id);
  };

  return (
    <div className={styles["Overlay"]}>
      <div className={styles["mycourse-find-recommend-modal-container"]}>
        <label className={styles["mycourse-find-recommend-modal-title"]} htmlFor="find-recommend">
          추천한 장소에서 찾기
          <button className={styles["mycourse-find-recommend-close-btn"]} type="button" onClick={() => setRecommendModal(false)}>
            <img className={styles["mycourse-find-recommend-close-btn-img"]} src={ModalClose} alt="닫기 아이콘" />
            {!recommendModal ? setRecommendModal(true) : null}
          </button>
        </label>
        {recommendPosts.length === 0 ? (
          <div className={styles["no-recommend-list"]}>추천한 장소가 없습니다. 장소 상세 페이지에서 따봉을 눌러보세요!</div>
        ) : (
          <div className={styles["mycourse-find-recommend-modal-list-box-container"]}>
            {recommendPosts.map((el) => (
              <MyCourseItemListBox key={el.id} state={state} setState={setState} el={el} onClick={(place_name, id) => handleClickItem(place_name, id)} />
            ))}
            {loading && (
              <div>
                <Loading />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourseFindRecommendModal;
