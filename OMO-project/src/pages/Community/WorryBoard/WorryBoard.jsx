import axios from 'axios';
import React, {useEffect, useRef, useState, useReducer} from "react";
import styles from "./WorryBoard.module.css";
// import {communityPageFilter} from "./../../../const/communityPageFilter";
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory";
// import Filter from "../../../components/Filter/Filter";
import ListSearch from "./../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {CommunityWorryPostList} from "../../../components/CommunityWorryPostList/CommunityWorryPostList";
import WritingButtonImg from "../../../assets/writing-button.png";
import WriteWorryBoard from "../../../components/WritePost/WriteWorryBoard/WriteWorryBoard";
// import {communityWorryPost} from "./../../../const/communityWorryPost";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      return [action.data, ...state];
    default:
      return state;
  }
};

export const BoardStateContext = React.createContext();
export const BoardDispatchContext = React.createContext();

const WorryBoard = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const [boardId, setBoardId] = useState(null);
  const [openModal, setOpenModal] = useState(false);


  // 게시글 불러오기
  const fetchData = async (id) => {
    try {
      const response = await axios.get(`https://api.oneulmohae.co.kr/board/${id}`);
      dispatch({ type: "INIT", data: response.data });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (boardId !== null) {
      fetchData(boardId);
    }
  }, [boardId]);

  console.log(data);


  // 게시글 작성
  const onCreate = async (title, content) => {
    try {
      const response = await axios.post(
        'https://api.oneulmohae.co.kr/board/write',
        {
          title,
          content,
          type: "TROUBLE",
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          }
        }
      );

      const newPost = response.data;
    console.log('Server New Post:', newPost); 
      setBoardId(newPost.id); // 새로 생성된 게시글의 ID를 boardId로 설정
      dispatch({
        type: "CREATE",
        data: {
          id: newPost.id,
          reg_at: newPost.reg_at,
          title: newPost.title,
          content: newPost.content,
          type: "TROUBLE",
        },
      });
    } catch (error) {
      console.error("Error creating post:", error);
      alert("게시글 작성 중 오류가 발생했습니다.");
    }
  };




  return (
    <>
      <BoardStateContext.Provider value={data}>
        <BoardDispatchContext.Provider
          value={{
            onCreate,
          }}
        >
          {/* 카테고리 */}
          <CommunityCategory />
  
          {/* 필터 + 검색창 */}
          <div className={styles["community-component-container"]}>
            {/* <div className={styles["community-filter-container"]}>
              {communityPageFilter.map((el) => {
                return <Filter key={el.id} {...el} />;
              })}
            </div> */}
            <ListSearch  />
          </div>
  
          {/* 게시글 리스트 */}
          {data.length === 0 ? (
            <div>글 작성 내역이 없습니다. 우측 하단에 있는 글쓰기 버튼을 통해 게시글을 작성해주세요.</div>
          ) : (
            <CommunityWorryPostList communityWorryPostList={data} />
          )}
  
          {/* 스크롤 */}
          <ScrollToTop />
  
          {/* 글쓰기 */}
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
            {openModal ? <WriteWorryBoard onCreate={onCreate} openModal={openModal} setOpenModal={setOpenModal} /> : null}
          </div>
        </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>
    </>
  );
};

export default WorryBoard;
