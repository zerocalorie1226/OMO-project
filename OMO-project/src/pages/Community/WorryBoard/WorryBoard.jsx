import axios from 'axios';
import React, { useEffect, useState } from "react";
import styles from "./WorryBoard.module.css";
import { CommunityCategory } from "./../../../components/CommunityCategory/CommunityCategory";
import ListSearch from "./../../../components/ListSearch/ListSearch";
import { ScrollToTop } from "../../../components/ScrollToTop/ScrollToTop";
import { CommunityWorryPostList } from "../../../components/CommunityWorryPostList/CommunityWorryPostList";
import WritingButtonImg from "../../../assets/writing-button.png";
import WriteWorryBoard from "../../../components/WritePost/WriteWorryBoard/WriteWorryBoard";

const WorryBoard = () => {
  const [posts, setPosts] = useState([]);
  const [boardId, setBoardId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // 게시글 불러오기
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.oneulmohae.co.kr/board/Trouble?page=1&size=10&sorting=createdAt');
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("get으로 불러온 데이터: ", posts); // {data배열, pageInfo}

  // 게시글 작성
  const onCreate = async (title, content) => {
    const postData = {
      title,
      content,
      type: "TROUBLE",
    };

    console.log('작성한 데이터: ', postData); // {data}

    try {
      const response = await axios.post(
        'https://api.oneulmohae.co.kr/board/write',
        postData,
        {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          }
        }
      );

      const newPost = response.data;
      console.log('post데이터:', newPost); // {data+사용자정보까지}
      setBoardId(newPost.boardId); // 새로 생성된 게시글의 ID를 boardId로 설정
      setPosts(prevPosts => [
        newPost,
        ...prevPosts
      ]);

    } catch (error) {
      console.error("Error creating post:", error);
      if (error.response) {
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        console.error('Response Headers:', error.response.headers);
      }
      alert("게시글 작성 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      {/* 카테고리 */}
      <CommunityCategory />

      {/* 필터 + 검색창 */}
      <div className={styles["community-component-container"]}>
        <ListSearch />
      </div>

      {/* 게시글 리스트 */}
      {posts.length === 0 ? (
        <div>글 작성 내역이 없습니다. 우측 하단에 있는 글쓰기 버튼을 통해 게시글을 작성해주세요.</div>
      ) : (
        <CommunityWorryPostList communityWorryPostList={posts} />
      )}

      {/* 스크롤 */}
      <ScrollToTop />

      {/* 글쓰기 */}
      <div className={styles["writing-btn-container"]}>
        <button
          type="button"
          className={styles["writing-btn"]}
          onClick={() => setOpenModal(true)}
        >
          <img src={WritingButtonImg} alt="글쓰기 아이콘" style={{ width: "80px", height: "80px" }} />
        </button>
        {openModal && <WriteWorryBoard onCreate={onCreate} openModal={openModal} setOpenModal={setOpenModal} />}
      </div>
    </>
  );
};

export default WorryBoard;
