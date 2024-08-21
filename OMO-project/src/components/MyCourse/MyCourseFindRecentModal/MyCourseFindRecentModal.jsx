import styles from "./MyCourseFindRecentModal.module.css";
import {MyCourseItemListBox} from "../MyCourseItemListBox/MyCourseItemListBox";
import ModalClose from "./../../../assets/modal-close.png";
import {useEffect, useState, useCallback} from "react";
import axios from "axios";
import {Loading} from "../../Loading/Loading";

const MyCourseFindRecentModal = ({recentModal, setRecentModal, state, setState, setPlaceName, setPlaceId}) => {
  const [recentData, setRecentData] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const storedRecentData = localStorage.getItem("recentData");
      if (storedRecentData) {
        const parsedData = JSON.parse(storedRecentData);
        const placeNameList = parsedData.map((place) => place.place_name);
        const placeIdList = parsedData.map((place) => place.id);

        const postData = {
          placeNameList,
          placeIdList,
        };

        try {
          const response = await axios.post("https://api.oneulmohae.co.kr/place/recent", postData, {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
          });
          setRecentData(response.data);
          setMaxPage(Math.ceil(response.data.length / 10));
        } catch (error) {
          console.error("Error fetching recent data", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleScroll = useCallback(() => {
    if (loading || pagination >= maxPage) return;
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPagination((prevPage) => prevPage + 1);
    }
  }, [loading, pagination, maxPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleClickItem = (place_name, id) => {
    setPlaceName(place_name);
    setPlaceId(id);
  };

  return (
    <div className={styles["Overlay"]}>
      <div className={styles["mycourse-find-recent-modal-container"]}>
        <label className={styles["mycourse-find-recent-modal-title"]} htmlFor="find-recent">
          최근 본 장소에서 찾기
          <button className={styles["mycourse-find-recent-close-btn"]} type="button" onClick={() => setRecentModal(false)}>
            <img className={styles["mycourse-find-recent-close-btn-img"]} src={ModalClose} alt="닫기 아이콘" />
            {!recentModal ? setRecentModal(true) : null}
          </button>
        </label>

        <div className={styles["mycourse-find-recent-modal-list-box-container"]}>
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : recentData.length === 0 ? (
            <div className={styles["no-recent-list"]}>최근 본 장소가 없습니다.</div>
          ) : (
            <div>
              {recentData.slice(0, pagination * 10).map((el) => (
                <MyCourseItemListBox key={el.id} state={state} setState={setState} el={el} onClick={(place_name, id) => handleClickItem(place_name, id)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourseFindRecentModal;
