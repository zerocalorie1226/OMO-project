import React, {useEffect, useState} from "react";
import styles from "../Recent/Recent.module.css";
import Mypage from "../../../components/Mypage/Mypage";
import {MypageListBox} from "../../../components/MypageListBox/MypageListBox";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import RecentIcon from "../../../assets/my-page/my-info/recent-place.png";
import axios from "axios";
import {Loading} from "../../../components/Loading/Loading";

const Recent = () => {
  const [recentData, setRecentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedRecentData = localStorage.getItem("recentData");
    if (storedRecentData) {
      setRecentData(JSON.parse(storedRecentData));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const placeNameList = recentData.map((place) => place.place_name);
      const placeIdList = recentData.map((place) => place.id);

      const postData = {
        placeNameList: placeNameList,
        placeIdList: placeIdList,
      };

      try {
        const response = await axios.get("https://api.oneulmohae.co.kr/place/recent", {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
          params: postData,
        });
        setIsLoading(false);
        console.log(response);
        setRecentData(response.data)
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
        setIsLoading(false);
      }
    };

    if (recentData.length > 0) {
      fetchData();
    }
  }, [recentData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles["mypage-list-component-container"]}>
        <h2 className={styles["mypage-list-title-container"]}>
          <div>
            <img src={RecentIcon} alt="최근 본 장소 아이콘" /> <span>최근 본 장소</span>
          </div>
        </h2>

        <section className={styles["mypage-list-container"]}>
          <Mypage />
          <div className={styles["mypage-list-box-container"]}>
            {recentData.length === 0 ? (
              <div className={styles["no-recent-list"]}>최근 본 장소가 없습니다.</div>
            ) : (
              <div>
                {recentData.map((item) => (
                  <MypageListBox key={item.id} {...item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Recent;
