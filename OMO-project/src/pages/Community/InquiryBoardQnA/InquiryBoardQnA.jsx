import axios from "axios";
import React, {useEffect, useRef, useState, useReducer} from "react";
import styles from "./InquiryBoardQnA.module.css";
import CommunityInquiryFilter from "../../../components/CommunityInquiryFilter/CommunityInquiryFilter";
import {CommunityQnAPostList} from "../../../components/CommunityQnAPostList/CommunityQnAPostList";
import {CommunityCategory} from "../../../components/CommunityCategory/CommunityCategory";
import ListSearch from "../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import WritingButtonImg from "../../../assets/writing-button.png";
import WriteQnABoard from "../../../components/WritePost/WriteQnABoard/WriteQnABoard";

// InquiryBoardQnA

const InquiryBoardQnA = () => {
  const [posts, setPosts] = useState([]);
  const [boardId, setBoardId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // 게시글 불러오기
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.oneulmohae.co.kr/board/Qna?page=1&size=10&sorting=createdAt");
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 게시글 작성
  const onCreate = async (title, content) => {
    const postData = {
      title,
      content,
      type: "QNA",
    };

    try {
      const response = await axios.post("https://api.oneulmohae.co.kr/board/write", postData, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      });

      const newPost = response.data;
      setBoardId(newPost.boardId); // 새로 생성된 게시글의 ID를 boardId로 설정
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    } catch (error) {
      console.error("Error creating post:", error);
      if (error.response) {
        console.error("Response Data:", error.response.data);
        console.error("Response Status:", error.response.status);
        console.error("Response Headers:", error.response.headers);
      }
      alert("게시글 작성 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <CommunityCategory />
      <div className={styles["inquiry-board-qna-filter-search-container"]}>
        <CommunityInquiryFilter />
        <ListSearch />
      </div>
      <hr className={styles["inquiry-board-qna-hr"]} />
      {posts.length === 0 ? (
        <div className={styles["no-boardlist"]}>글 작성 내역이 없습니다. 우측 하단에 있는 글쓰기 버튼을 통해 게시글을 작성해주세요.</div>
      ) : (
        <CommunityQnAPostList communityQnAPostList={posts} />
      )}
      <ScrollToTop />
      <div className={styles["writing-btn-container"]}>
        <button
          type="button"
          className={styles["writing-btn"]}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img src={WritingButtonImg} alt="글쓰기 아이콘" style={{width: "80px", height: "80px"}} />{" "}
        </button>
        {openModal ? <WriteQnABoard onCreate={onCreate} openModal={openModal} setOpenModal={setOpenModal} /> : null}
      </div>
    </>
  );
};

export default InquiryBoardQnA;
