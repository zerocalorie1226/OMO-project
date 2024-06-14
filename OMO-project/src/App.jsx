import "./App.module.css";
import {Header} from "./components/Header/Header";
import React, {useReducer, useRef} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
import {useEffect, useState} from "react";
import {dataCopy} from "./const/dataCopy";
import LoginLoading from "./pages/LoginLoading/LoginLoading";
import {MyCourseProvider} from "./assets/context/MyCourseContext";

const App = ({handleLogout, isLoggedIn, setIsLoggedIn}) => {
  // 현재 위치를 가져오기 위한 구글 API KEY (메인페이지에 사용 - 검색창에 디폴트로 현재 위치 뜨게)
  const GOOGLE_MAPS_API_KEY = "AIzaSyBFZH53aP29Zr7vY5jyv7wd4wGQMg3CI1s";

  // 구글 API로 현재 위치 가져오는 fetch 함수 (메인페이지에 사용)
  const getCurrentPosition = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const {latitude, longitude} = position.coords;

      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`);
      const data = await response.json();
      const address = data.results[0].formatted_address; // 현재 위치의 도로명 주소
      setLocation(address);
      return {latitude, longitude, address};
    } catch (error) {
      console.error("Failed to fetch location data:", error);
      throw new Error("Failed to fetch location data");
    }
  };

  const [searchResultsX, setSearchResultsX] = useState(""); // 설정된 위치의 X 좌표 상태 관리
  const [searchResultsY, setSearchResultsY] = useState(""); // 설정된 위치 Y 좌표 상태 관리
  const [location, setLocation] = useState("Loading...");

  useEffect(() => {
    getCurrentPosition()
      .then(({latitude, longitude}) => {
        // 현재 위치 설정된거 받아옴
        setSearchResultsX(longitude);
        setSearchResultsY(latitude);
      })
      .catch((error) => {
        console.error("현재 위치를 가져오는데 실패했습니다:", error.message);
      });
  }, []);

  // 마이페이지 최근 본 장소 상태 관리
  const [recentData, setRecentData] = useState([]);

  const [defaultListImg, setDefaultListImg] = useState("/src/assets/detail/defaultDetailIcon.png");

  return (
    <MyCourseProvider>
      <div>
        {/* 헤더 */}
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<Main setSearchResultsX={setSearchResultsX} setSearchResultsY={setSearchResultsY} location={location} setLocation={setLocation} />} />

          {/* 서브 페이지 */}
          <Route path="/Eating" element={<Eating />} />
          <Route path="/Watching" element={<Watching />} />
          <Route path="/Playing" element={<Playing />} />
          <Route path="/ThemeCafe" element={<ThemeCafe />} />

          {/* 로그인/회원가입 */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/LoginLoading" element={<LoginLoading />} />

          {/* 리스트페이지 */}
          <Route
            path="/List"
            element={
              <List
                recentData={recentData}
                setRecentData={setRecentData}
                dataCopy={dataCopy}
                searchResultsX={searchResultsX}
                searchResultsY={searchResultsY}
                defaultListImg={defaultListImg}
                setDefaultListImg={setDefaultListImg}
              />
            }
          />
          <Route
            path="/List/:category"
            element={
              <List
                recentData={recentData}
                setRecentData={setRecentData}
                dataCopy={dataCopy}
                searchResultsX={searchResultsX}
                searchResultsY={searchResultsY}
                defaultListImg={defaultListImg}
                setDefaultListImg={setDefaultListImg}
              />
            }
          />

          {/* 상세페이지 */}
          <Route path="/DetailMenu/:id/:place_name" element={<DetailMenu defaultListImg={defaultListImg} setDefaultListImg={setDefaultListImg} />} />
          <Route path="/DetailNone" element={<DetailNone />} />
          <Route path="/DetailTariff" element={<DetailTariff />} />

          {/* 마이 페이지 */}

          <Route path="/MyInfo" element={<MyInfo />} />
          <Route path="/Interest" element={<Interest />} />
          <Route path="/Recommend" element={<Recommend />} />
          <Route path="/Recent" element={<Recent recentData={recentData} />} />
          <Route path="/MyWrote" element={<MyWrote />} />
          <Route path="/ProfileSetting" element={<ProfileSetting isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

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
    </MyCourseProvider>
  );
};
export default App;
