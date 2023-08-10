import "./App.module.css";
import {Header} from "./components/Header/Header";

import Main from "./pages/Main/Main";
// import Signup from "./pages/Signup/Signup";
import Eating from "./pages/Sub/Eating/Eating";
import Watching from "./pages/Sub/Watching/Watching";
import Playing from "./pages/Sub/Playing/Playing";
import ThemeCafe from "./pages/Sub/ThemeCafe/ThemeCafe";
import Login from "./pages/Login/Login";
import List from "./pages/List/list";
import MyInfo from "./pages/Mypage/MyInfo/MyInfo";
import MyWrote from "./pages/Mypage/Mywrote/MyWrote";
import Detail from "./pages/Detail/Detail";
import ProfileSetting from "./pages/Mypage/ProfileSetting/ProfileSetting";
import MyCourse from "./pages/MyCourse/MyCourse";
import NoticeMain from "./pages/notice/Notice";

const App = () => (
  <>
    <div>
      <Header />
      {/* <Main /> */}
      {/* <Eating /> */}
      {/* <Watching /> */}
      {/* <Playing /> */}
      {/* <ThemeCafe /> */}
      {/* <Signup /> */}
      {/* <List /> */}
      {/* <Detail /> */}
      {/* <MyInfo /> */}
      {/* <MyWrote /> */}
      {/* <ProfileSetting /> */}
      {/* <MyCourse /> */}
      <NoticeMain />
    </div>
  </>
);

export default App;
