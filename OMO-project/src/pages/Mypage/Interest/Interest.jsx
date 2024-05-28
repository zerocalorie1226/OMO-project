import axios from 'axios';
import styles from "./Interest.module.css";
import Mypage from "../../../components/Mypage/Mypage";
import { MypageListBox } from "../../../components/MypageListBox/MypageListBox";
import { ScrollToTop } from "../../../components/ScrollToTop/ScrollToTop";
import InterestIcon from "../../../assets/my-page/my-info/empty-heart.png";
import { useEffect, useState } from 'react';

const Interest = () => {
  const [interestPosts, setInterestPosts] = useState(null); // 초기값을 null로 설정

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.oneulmohae.co.kr/myPage/likes?page=1&size=10', {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      });
      setInterestPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setInterestPosts([]); // 오류 발생 시 빈 배열로 초기화
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
            <img src={InterestIcon} alt="관심목록 아이콘" /> <span>관심 목록</span>
          </div>
        </h2>

        <section className={styles["mypage-list-container"]}>
          <Mypage />
          <div className={styles["mypage-list-box-container"]}>
            {interestPosts === null || interestPosts.length === 0 ? (
              <div className={styles["no-jjim-list"]}>관심 목록이 없습니다. 장소 상세 페이지에서 하트를 눌러보세요!</div>
            ) : (
              <div>
                {interestPosts.map((el) => {
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

export default Interest;
