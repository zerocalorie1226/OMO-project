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

  // localStorage.setItem("worryboard", JSON.stringify(newState));
  // localStorage.setItem("freeboard", JSON.stringify(newState));
  return newState;
};

export const BoardStateContext = React.createContext();
export const BoardDispatchContext = React.createContext();

const MyWrote = () => {
 

  const [data, dispatch] = useReducer(reducer, []);

  // useEffect(() => {
  //   const localWorryData = localStorage.getItem("worryboard");
  //   if (localWorryData) {
  //     const boardList = JSON.parse(localWorryData).sort((a, b) => parseInt(b.id) - parseInt(a.id));

  //     if (boardList.length >= 1) {
  //       dataId.current = parseInt(boardList[0].id) + 1;
  //       dispatch({type: "INIT", data: boardList});
  //     }
  //   }
  // }, []);

  useEffect(() => {
    const localWorryData = localStorage.getItem("worryboard");
    if (localWorryData) {
      const worryboardList = JSON.parse(localWorryData).sort((a, b) => parseInt(b.id) - parseInt(a.id));

      if (worryboardList.length >= 1) {
        dataId.current = parseInt(worryboardList[0].id) + 1;
        dispatch({type: "INIT", data: worryboardList});
      }
    }
  }, []);

  // useEffect(() => {
  //   const localFreeData = localStorage.getItem("freeboard");
  //   if (localFreeData) {
  //     const freeboardList = JSON.parse(localFreeData).sort((a, b) => parseInt(b.id) - parseInt(a.id));

  //     if (freeboardList.length >= 1) {
  //       dataId.current = parseInt(freeboardList[0].id) + 1;
  //       dispatch({type: "INIT", data: freeboardList});
  //     }
  //   }
  // }, []);

  

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
              <div className={styles["my-wrote-main-title-container"]}>
                <MypageWroteMain communityWorryPostList={data}  />
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
