import axios from 'axios';
import React, { useEffect, useState } from "react";
import Mypage from "../../../components/Mypage/Mypage";
import styles from "./MyWrote.module.css";
import MyWroteIcon from "../../../assets/my-page/my-info/my-writing.png";
import MyPageFilter from "../../../components/MypageFilter/MypageFilter";
import MypageWroteMain from "../../../components/MypageWroteMain/MypageWroteMain";
import { ScrollToTop } from "../../../components/ScrollToTop/ScrollToTop";

const MyWrote = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const MyWroteData = async () => {
      try {
        const response = await axios.get('https://api.oneulmohae.co.kr/myPage/boards?page=1&category=ALL', {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });
        if (Array.isArray(response.data)) {
          setMyPosts(response.data);
          console.log(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
          setMyPosts([]);
        }
      } catch (error) {
        console.error("Error fetching MyWrote data:", error);
        setMyPosts([]);
      }
    };

    MyWroteData();
  }, []);

  const filteredData = myPosts.filter((item) => selectedCategory === "all" || item.category === selectedCategory.toUpperCase());

  const getCategoryDisplayName = () => {
    switch (selectedCategory) {
      case "all":
        return "전체";
      case "free":
        return "자유";
      case "trouble":
        return "고민";
      case "qna":
        return "문의게시판-QnA";
      default:
        return selectedCategory;
    }
  };

  return (
    <>
      <div className={styles["my-wrote-total-container"]}>
        <h2 className={styles["my-wrote-title-container"]}>
          <img src={MyWroteIcon} alt="내가 쓴 글 아이콘" /> 내가 쓴 글
        </h2>

        <Mypage />

        <div className={styles["my-wrote-filter-main-container"]}>
          <MyPageFilter setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
          <div className={styles["my-wrote-main-title-container"]}>
            {filteredData.length === 0 ? (
              <div className={styles["no-board-list"]} >글 작성 내역이 없습니다. 커뮤니티 페이지 내 {getCategoryDisplayName()}게시판에 글을 작성해주세요.</div>
            ) : (
              <MypageWroteMain postList={filteredData} />
            )}
          </div>
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default MyWrote;
