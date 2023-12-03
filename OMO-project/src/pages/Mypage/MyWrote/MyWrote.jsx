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


  useEffect(() => {
    const localWorryData = JSON.parse(localStorage.getItem("worryboard"));
    const localFreeData = JSON.parse(localStorage.getItem("freeboard"));
    const combineBoardList = [...localWorryData,...localFreeData]

    if (localWorryData) {
      const newboardList = combineBoardList.sort((a, b) => parseInt(b.reg_at) - parseInt(a.reg_at));

      if (combineBoardList.length >= 1) {
        dataId.current = parseInt(newboardList[0].id) + 1;
        dispatch({type: "INIT", data: newboardList});
      }
    }
  }, []);

  // useEffect(() => {
   
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
                <MypageWroteMain 
                // communityWorryPostList={data}  communityFreePostList={data}  
                postList={data}
                />
                {/* <MypageWroteMain  /> */}
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
