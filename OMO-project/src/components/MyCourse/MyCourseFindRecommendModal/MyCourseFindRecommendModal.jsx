import styles from "./MyCourseFindRecommendModal.module.css";
import {MyCourseItemListBox} from "../MyCourseItemListBox/MyCourseItemListBox";
import {data} from "./../../../const/data"; // 제거 예정 -> get으로 관심목록 불러오기
import ModalClose from "./../../../assets/modal-close.png";
import { useEffect, useState } from "react";
import axios from "axios";

const MyCourseFindRecommendModal = ({recommendModal, setRecommendModal, state, setState, item, setItem, changeSetContent}) => {
  
  const [recommendPosts, setRecommendPosts] = useState(null); // 초기값을 null로 설정

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.oneulmohae.co.kr/myPage/recommend?page=1&size=10", {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      });
      setRecommendPosts(response.data);
    } catch (error) {
      setRecommendPosts([]); // 오류 발생 시 빈 배열로 초기화
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  
  const handleClickItem = (item) => {
    setItem(item); // 받아온 id를 업데이트 해줌

    // console.log("모달창 id:", item);
  };
  return (
    <>
      <div className={styles["Overlay"]}>
        <div className={styles["mycourse-find-recommend-modal-container"]}>
          <label className={styles["mycourse-find-recommend-modal-title"]} htmlFor="find-recommend">
            추천한 장소에서 찾기
            <button
              className={styles["mycourse-find-recommend-close-btn"]}
              type="button"
              onClick={() => {
                setRecommendModal(false);
              }}
            >
              <img className={styles["mycourse-find-recommend-close-btn-img"]} src={ModalClose} alt="닫기 아이콘" />
              {!recommendModal ? setRecommendModal(true) : null}
            </button>
          </label>
          {recommendPosts === null || recommendPosts.length === 0 ? (
              <div className={styles["no-recommend-list"]}>추천한 장소가 없습니다. 장소 상세 페이지에서 따봉을 눌러보세요!</div>
            ) : (
          <div className={styles["mycourse-find-recommend-modal-list-box-container"]}>
            
            <div>
            {recommendPosts.map((el) => { // 여기에 관심목록 데이터가 들어와야함
              return <MyCourseItemListBox key={el.id} state={state} setState={setState} el={el} onClick={handleClickItem} changeSetContent={changeSetContent} />;
            })}
            </div>
          </div>
          )}
          </div>
      </div>
    </>
  );
};

export default MyCourseFindRecommendModal;
