import axios from "axios";
import React, {useEffect, useState} from "react";
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
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [boardId, setBoardId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // 게시글 불러오기
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.oneulmohae.co.kr/board/Qna?page=1&size=10&sorting=createdAt");
      setPosts(response.data.data);
      setFilteredPosts(response.data.data);
    } catch (error) {
      console.error("QnA게시판 게시글을 불러오는데 실패하였습니다.", error);
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
      setFilteredPosts((prevPosts) => [newPost, ...prevPosts]);
    } catch (error) {
      alert("게시글 작성 중 오류가 발생했습니다.");
    }
  };

  // 검색어 변경
  const onSearch = (term) => {
    setSearchTerm(term);
    if (term === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => post.title.toLowerCase().includes(term.toLowerCase()));
      setFilteredPosts(filtered);
    }
  };

  return (
    <>
      <CommunityCategory />
      <div className={styles["inquiry-board-qna-filter-search-container"]}>
        <CommunityInquiryFilter />
        <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
      </div>
      <hr className={styles["inquiry-board-qna-hr"]} />
      {filteredPosts.length === 0 ? (
        <div className={styles["no-boardlist"]}>글 작성 내역이 없습니다. 우측 하단에 있는 글쓰기 버튼을 통해 게시글을 작성해주세요.</div>
      ) : (
        <CommunityQnAPostList communityQnAPostList={filteredPosts} />
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
