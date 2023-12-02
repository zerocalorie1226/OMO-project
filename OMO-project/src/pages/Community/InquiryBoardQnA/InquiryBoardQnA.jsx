import React, {useEffect, useRef, useState, useReducer} from "react";
import styles from "./InquiryBoardQnA.module.css";
import CommunityInquiryFilter from "../../../components/CommunityInquiryFilter/CommunityInquiryFilter";
import {CommunityQnAPostList} from "../../../components/CommunityQnAPostList/CommunityQnAPostList";
import {CommunityCategory} from "../../../components/CommunityCategory/CommunityCategory";
import ListSearch from "../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import WritingButtonImg from "../../../assets/writing-button.png";
import WriteQnABoard from "../../../components/WritePost/WriteQnABoard/WriteQnABoard";
import { communityQnAPost } from "../../../const/communityQnAPost";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("qnaboard", JSON.stringify(newState));
  return newState;
};

export const BoardStateContext = React.createContext();
export const BoardDispatchContext = React.createContext();

const InquiryBoardQnA = () => {
  const [data, dispatch] = useReducer(reducer, communityQnAPost);

  useEffect(() => {
    const localData = localStorage.getItem("qnaboard");
    if (localData) {
      const boardList = JSON.parse(localData).sort((a, b) => parseInt(b.id) - parseInt(a.id));

      if (boardList.length >= 1) {
        dataId.current = parseInt(boardList[0].id) + 1;
        dispatch({type: "INIT", data: boardList});
      }
    }
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const dataId = useRef(0);

  // CREATE
  const onCreate = (title, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        reg_at: new Date().getTime(),
        title,
        content,
      },
    });
    dataId.current += 1;
  };

  return (
    <>
      <BoardStateContext.Provider value={data}>
        <BoardDispatchContext.Provider
          value={{
            onCreate,
          }}
        >
          <CommunityCategory />
          <div className={styles["inquiry-board-qna-filter-search-container"]}>
            <CommunityInquiryFilter />
            <ListSearch />
          </div>
          <hr className={styles["inquiry-board-qna-hr"]} />
          <CommunityQnAPostList communityQnAPostList={data} />
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
        </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>
    </>
  );
};

export default InquiryBoardQnA;
