import "./App.module.css";
import { Header } from "./components/Header/Header";
import React, { useReducer, useRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./pages/signup/Signup";
import Eating from "./pages/sub/eating/Eating";
import Watching from "./pages/sub/watching/Watching";
import Playing from "./pages/sub/playing/Playing";
import ThemeCafe from "./pages/sub/ThemeCafe/ThemeCafe";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import MyInfo from "./pages/Mypage/MyInfo/MyInfo";
import MyWrote from "./pages/Mypage/MyWrote/MyWrote";
import DetailMenu from "./pages/Detail/DetailMenu/DetailMenu";
import DetailNone from "./pages/Detail/DetailNone/DetailNone";
import DetailTariff from "./pages/Detail/DetailTariff/DetailTariff";
import Interest from "./pages/Mypage/Interest/Interest";
import Recent from "./pages/Mypage/Recent/Recent";
import Recommend from "./pages/Mypage/Recommend/Recommend";
import ProfileSetting from "./pages/Mypage/ProfileSetting/ProfileSetting";
import MyCourseMain from "./pages/MyCourse/MyCourseMain/MyCourseMain";
import Notice from "./pages/notice/Notice";
import MyCourseBoard from "./pages/Community/MyCourseBoard/MyCourseBoard";
import InquiryBoardFrequent from "./pages/Community/InquiryBoardFrequent/InquiryBoardFrequent";
import InquiryBoardQnA from "./pages/Community/InquiryBoardQnA/InquiryBoardQnA";
import WorryBoard from "./pages/Community/WorryBoard/WorryBoard";
import FreeBoard from "./pages/Community/FreeBoard/FreeBoard";
import MyCourseOthersVersion from "./pages/MyCourse/MyCourseOthersVersion/MyCourseOthersVersion";
import Main from "./pages/main/Main";
import MyCourseNewWrite from "./pages/MyCourse/MyCourseNewWrite/MyCourseNewWrite";
import MyCourseDetail from "./pages/MyCourse/MyCourseDetail/MyCourseDetail";
import { useEffect, useState } from "react";
import {dataCopy} from"./const/dataCopy"

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
  localStorage.setItem("mycourseboard", JSON.stringify(newState));
  return newState;
};

export const MyCourseStateContext = React.createContext();
export const MyCourseDispatchContext = React.createContext();


const App = () => {


  // 메인페이지에서 사용자의 현재 위치 가져오기
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation을 지원하지 않는 브라우저입니다."));
      }
    });
  };

  // useState를 사용하여 사용자의 현재 위치를 관리
  const [searchResultsX, setSearchResultsX] = useState("");
  const [searchResultsY, setSearchResultsY] = useState("");

  // 컴포넌트가 마운트될 때 사용자의 현재 위치를 가져와서 상태를 업데이트
  useEffect(() => {
    getCurrentPosition()
      .then(({ latitude, longitude }) => {
        console.log("사용자의 현재 위치:", latitude, longitude);
        // 가져온 현재 위치를 상태에 설정
        setSearchResultsX(longitude);
        setSearchResultsY(latitude);
      })
      .catch((error) => {
        console.error("현재 위치를 가져오는데 실패했습니다:", error.message);
      });
  }, []); // 컴포넌트가 마운트될 때만 실행
 


  // 나만의 코스 data
  const [data, dispatch] = useReducer(reducer, []);

  // 나만의 코스 list
  useEffect(() => {
    const localData = localStorage.getItem("mycourseboard");
    if (localData) {
      const boardList = JSON.parse(localData).sort((a, b) => parseInt(b.reg_at) - parseInt(a.reg_at));
      if (boardList.length >= 1) {
        dataId.current = parseInt(boardList[0].id) + 1;
        dispatch({ type: "INIT", data: boardList });
      }
    }
  }, []);


  // 최근 본 장소 
  const [recentData, setRecentData] = useState([]);

  // 관심 목록 (하트) 
  const [jjimData, setJjimData] = useState([]);

  // 추천 장소 (따봉)
  const [likeData, setLikeData] = useState([]);

  const dataId = useRef(0);

  // 나만의 코스 CREATE
  const onCreate = (dates, title, content, regat) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        title,
        dates,
        content,
        regat,
      },
    });
    dataId.current += 1;
  };
  

  return (
    <MyCourseStateContext.Provider value={data}>
      <MyCourseDispatchContext.Provider
        value={{
          onCreate,
        }}
      >
        <BrowserRouter>
          <div>
            {/* 헤더 */}
            <Header />
            <Routes>
              {/* 메인 페이지 */}
              <Route path="/" element={<Main setSearchResultsX={setSearchResultsX} setSearchResultsY={setSearchResultsY} />} />

              {/* 서브 페이지 */}
              <Route path="/Eating" element={<Eating />} />
              <Route path="/Watching" element={<Watching />} />
              <Route path="/Playing" element={<Playing />} />
              <Route path="/ThemeCafe" element={<ThemeCafe />} />

              {/* 로그인/회원가입 */}
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />

              {/* 리스트페이지 */}
              <Route path="/List" element={<List recentData={recentData} setRecentData={setRecentData} dataCopy={dataCopy}  searchResultsX={searchResultsX} searchResultsY={searchResultsY}/>} />
              <Route path="/List/:category" element={<List recentData={recentData} setRecentData={setRecentData} dataCopy={dataCopy} searchResultsX={searchResultsX} searchResultsY={searchResultsY} />} />

              {/* 상세페이지 */}
              <Route path="/DetailMenu/:id" element={<DetailMenu jjimData={jjimData} setJjimData={setJjimData} likeData={likeData} setLikeData={setLikeData} />} />
              <Route path="/DetailNone" element={<DetailNone />} />
              <Route path="/DetailTariff" element={<DetailTariff />} />

              {/* 마이 페이지 */}
              <Route path="/MyInfo" element={<MyInfo jjimData={jjimData} likeData={likeData} />} />
              <Route path="/Interest" element={<Interest jjimData={jjimData} />} />
              <Route path="/Recommend" element={<Recommend likeData={likeData} />} />
              <Route path="/Recent" element={<Recent recentData={recentData} />} />
              <Route path="/MyWrote" element={<MyWrote />} />
              <Route path="/ProfileSetting" element={<ProfileSetting />} />

              {/* 나만의 코스 */}
              <Route path="/MyCourseMain" element={<MyCourseMain />} />
              <Route path="/MyCourseNewWrite" element={<MyCourseNewWrite />} />
              <Route path="/MyCourseDetail/:id" element={<MyCourseDetail />} />
              <Route path="/MyCourseOthersVersion/:id" element={<MyCourseOthersVersion />} />

              {/* 커뮤니티 */}
              <Route path="/MyCourseBoard" element={<MyCourseBoard />} />
              <Route path="/WorryBoard" element={<WorryBoard />} />
              <Route path="/FreeBoard" element={<FreeBoard />} />
              <Route path="/InquiryBoardFrequent" element={<InquiryBoardFrequent />} />
              <Route path="/InquiryBoardQnA" element={<InquiryBoardQnA />} />

              {/* 공지사항 */}
              <Route path="/Notice" element={<Notice />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MyCourseDispatchContext.Provider>
    </MyCourseStateContext.Provider>
  );
};
export default App;
