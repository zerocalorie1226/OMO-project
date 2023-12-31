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
  const [selectedCategory, setSelectedCategory] = useState("all"); // 기본은 전체보기

  console.log("selectedCategory: ",selectedCategory);

  useEffect(() => {
    const localWorryData = JSON.parse(localStorage.getItem("worryboard"));
    const localFreeData = JSON.parse(localStorage.getItem("freeboard"));
    const localQnaData = JSON.parse(localStorage.getItem("qnaboard"));
    const combineBoardList = [...localWorryData, ...localFreeData, ...localQnaData];

    if (combineBoardList ) {
      const newboardList = combineBoardList.sort((a, b) => parseInt(b.reg_at) - parseInt(a.reg_at));

      if (combineBoardList.length >= 1) {
        dataId.current = parseInt(newboardList[0].id) + 1;
        dispatch({type: "INIT", data: newboardList});
      }
    }
  }, []);

  const dataId = useRef(0);


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
                <MypageWroteMain  postList={data.filter((item) => item.category === selectedCategory)} /> 
                {/* <MypageWroteMain postList={data} />  */}
                
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
