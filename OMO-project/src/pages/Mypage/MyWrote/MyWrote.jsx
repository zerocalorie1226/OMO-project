import React, {useEffect, useRef, useState, useReducer} from "react";
import Mypage from "../../../components/Mypage/Mypage";
import styles from "./MyWrote.module.css";
import MyWroteIcon from "../../../assets/my-page/my-info/my-writing.png";
import MyPageFilter from "../../../components/MypageFilter/MypageFilter";
import MypageWroteMain from "../../../components/MypageWroteMain/MypageWroteMain";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";

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

  return newState;
};

export const BoardStateContext = React.createContext();
export const BoardDispatchContext = React.createContext();

const MyWrote = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const [selectedCategory, setSelectedCategory] = useState("all"); // 기본은 전체로 설정

  const filteredData = data.filter((item) => selectedCategory === "all" || item.category === selectedCategory);


  useEffect(() => {
    const localWorryData = JSON.parse(localStorage.getItem("worryboard")) || [];
    const localFreeData = JSON.parse(localStorage.getItem("freeboard")) || [];
    const localQnaData = JSON.parse(localStorage.getItem("qnaboard")) || [];
    dispatch({type: "INIT", data: [...localWorryData, ...localFreeData, ...localQnaData]});
  }, []);

  const dataId = useRef(0);

  const getCategoryDisplayName = () => {
    switch (selectedCategory) {
      case "all":
        return "전체";
      case "free":
        return "자유";
      case "worry":
        return "고민";
      case "qna":
        return "문의게시판-QnA";
      default:
        return selectedCategory;
    }
  };

  return (
    <>
      <BoardStateContext.Provider value={data}>
        <BoardDispatchContext.Provider>
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
                  <MypageWroteMain postList={data.filter((item) => selectedCategory === "all" || item.category === selectedCategory)} />
                )}
              </div>
            </div>
            <ScrollToTop />
          </div>
        </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>
    </>
  );
};

export default MyWrote;
