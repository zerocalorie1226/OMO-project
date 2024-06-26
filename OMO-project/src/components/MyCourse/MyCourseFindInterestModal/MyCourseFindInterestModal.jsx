import styles from "./MyCourseFindInterestModal.module.css";
import {MyCourseItemListBox} from "../MyCourseItemListBox/MyCourseItemListBox";
import ModalClose from "./../../../assets/modal-close.png";
import {useEffect, useState} from "react";
import axios from "axios";

const MyCourseFindInterestModal = ({interestModal, setInterestModal, state, setState, setPlaceName, setPlaceId}) => {
  const [interestPosts, setInterestPosts] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.oneulmohae.co.kr/myPage/likes?page=1&size=10", {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      });
      setInterestPosts(response.data);
    } catch (error) {
      setInterestPosts([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickItem = (place_name, id) => {
    setPlaceName(place_name);
    setPlaceId(id);
  };
  return (
    <>
      <div className={styles["Overlay"]}>
        <div className={styles["mycourse-find-interest-modal-container"]}>
          <label className={styles["mycourse-find-interest-modal-title"]} htmlFor="find-interest">
            관심 목록에서 찾기
            <button
              className={styles["mycourse-find-interest-close-btn"]}
              type="button"
              onClick={() => {
                setInterestModal(false);
              }}
            >
              <img className={styles["mycourse-find-interest-close-btn-img"]} src={ModalClose} alt="닫기 아이콘" />
              {!interestModal ? setInterestModal(true) : null}
            </button>
          </label>
          {interestPosts === null || interestPosts.length === 0 ? (
            <div className={styles["no-jjim-list"]}>관심 목록이 없습니다. 장소 상세 페이지에서 하트를 눌러보세요!</div>
          ) : (
            <div className={styles["mycourse-find-interest-modal-list-box-container"]}>
              <div>
                {interestPosts.map((el) => {
                  return <MyCourseItemListBox key={el.id} state={state} setState={setState} el={el} onClick={(place_name, id) => handleClickItem(place_name, id)} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyCourseFindInterestModal;
