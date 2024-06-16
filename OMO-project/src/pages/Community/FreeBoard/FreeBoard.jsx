import axios from 'axios';
import React, {useEffect, useState} from "react";
import styles from "./FreeBoard.module.css";
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory"; 
import ListSearch from "./../../../components/ListSearch/ListSearch"; 
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop"; 
import {CommunityFreePostList} from "../../../components/CommunityFreePostList/CommunityFreePostList";
import WritingButtonImg from "../../../assets/writing-button.png";
import WriteFreeBoard from "../../../components/WritePost/WriteFreeBoard/WriteFreeBoard";

const FreeBoard = () => {
  const [posts, setPosts] = useState([]);
  const [boardId, setBoardId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const category = "Free"; 

  // 게시글 불러오기
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.oneulmohae.co.kr/board/Free?page=1&size=10&sorting=createdAt');
      setPosts(response.data.data);
    } catch (error) {
      console.error("자유게시판 게시글을 불러오는데 실패하였습니다:", error);
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
      type: "FREE",
    };


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
      setBoardId(newPost.boardId); // 새로 생성된 게시글의 ID를 boardId로 설정
      setPosts(prevPosts => [
        newPost,
        ...prevPosts
      ]);

    } catch (error) {
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
        <div className={styles["no-boardlist"]}>글 작성 내역이 없습니다. 우측 하단에 있는 글쓰기 버튼을 통해 게시글을 작성해주세요.</div>
      ) : (
        <CommunityFreePostList communityFreePostList={posts} setPosts={setPosts} category={category}/>
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
        {openModal && <WriteFreeBoard onCreate={onCreate} openModal={openModal} setOpenModal={setOpenModal} />}
      </div>
    </>
  );
};

export default FreeBoard;
