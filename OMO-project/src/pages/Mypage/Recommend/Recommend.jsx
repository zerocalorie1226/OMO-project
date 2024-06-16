import axios from "axios";
import styles from "../Recommend/Recommend.module.css";
import Mypage from "../../../components/Mypage/Mypage";
import {MypageListBox} from "../../../components/MypageListBox/MypageListBox";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import RecommendIcon from "../../../assets/my-page/my-info/empty-thumb.png";
import {useEffect, useState} from "react";

const Recommend = () => {
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
      console.error("추천한 장소를 불러오는데 실패하였습니다.", error);
      setRecommendPosts([]); // 오류 발생 시 빈 배열로 초기화
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className={styles["mypage-list-component-container"]}>
        <h2 className={styles["mypage-list-title-container"]}>
          <div>
            <img src={RecommendIcon} alt="추천한 장소 아이콘" /> <span>추천한 장소</span>
          </div>
        </h2>

        <section className={styles["mypage-list-container"]}>
          <Mypage />
          <div className={styles["mypage-list-box-container"]}>
            {recommendPosts === null || recommendPosts.length === 0 ? (
              <div className={styles["no-like-list"]}>추천한 장소가 없습니다. 장소 상세 페이지에서 따봉을 눌러보세요!</div>
            ) : (
              <div>
                {recommendPosts.map((el) => {
                  return <MypageListBox key={el.id} {...el} />;
                })}
              </div>
            )}
          </div>
        </section>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Recommend;
