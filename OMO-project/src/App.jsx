import "./App.module.css";
import {Header} from "./components/Header/Header";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import Eating from "./pages/Sub/Eating/Eating";
import Watching from "./pages/Sub/Watching/Watching";
import Playing from "./pages/Sub/Playing/Playing";
import ThemeCafe from "./pages/Sub/ThemeCafe/ThemeCafe";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
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
import Notice from "./pages/Notice/Notice";
import MyCourseWrite from "./pages/MyCourse/MyCourseWrite/MyCourseWrite";
import WriteBoard from "./pages/Community/WriteBoard/WriteBoard";
import MyCourseBoard from "./pages/Community/MyCourseBoard/MyCourseBoard";
import InquiryBoardFrequent from "./pages/Community/InquiryBoardFrequent/InquiryBoardFrequent";
import InquiryBoardQnA from "./pages/community/InquiryBoardQnA/InquiryBoardQnA";
import WorryBoard from "./pages/Community/WorryBoard/WorryBoard";
import FreeBoard from "./pages/Community/FreeBoard/FreeBoard";
import MyCourseMyVersion from "./pages/MyCourse/MyCouresMyVersion/MyCourseMyVersion";
import MyCourseMyVersionEdit from "./pages/MyCourse/MyCourseMyVersionEdit/MyCourseMyVersionEdit";
import MyCourseOthersVersion from "./pages/MyCourse/MyCourseOthersVersion/MyCourseOthersVersion";

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        {/* <Eating /> */}
        {/* <Watching /> */}
        {/* <Playing /> */}
        {/* <ThemeCafe /> */}
        <Route path="/Login" element={<Login />} />

        {/* <Signup /> */}
        {/* <List /> */}
        {/* <DetailMenu /> */}
        {/* <DetailNone /> */}
        {/* <DetailTariff /> */}
        {/* <MyInfo /> */}
        {/* <MyWrote /> */}
        {/* <Interest /> */}
        {/* <Recent /> */}
        {/* <Recommend /> */}
        {/* <ProfileSetting /> */}
        <Route path="/MyCourseMain" element={<MyCourseMain />} />
        {/* <MyCourseMain /> */}
        {/* <MyCourseWrite /> */}
        {/* <MyCourseMyVersion /> */}
        {/* <MyCourseMyVersionEdit /> */}
        {/* <MyCourseOthersVersion /> */}

        {/* <WriteBoard /> */}
        <Route path="/MyCourseBoard" element={<MyCourseBoard />} />

        {/* <InquiryBoard /> */}
        {/* <InquiryBoardFrequent /> */}
        {/* <InquiryBoardQnA /> */}
        {/* <WorryBoard /> */}
        {/* <FreeBoard /> */}
        <Route path="/Notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
