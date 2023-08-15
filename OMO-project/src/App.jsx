import "./App.module.css";
import {Header} from "./components/Header/Header";

import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import Eating from "./pages/Sub/Eating/Eating";
import Watching from "./pages/Sub/Watching/Watching";
import Playing from "./pages/Sub/Playing/Playing";
import ThemeCafe from "./pages/Sub/ThemeCafe/ThemeCafe";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import MyInfo from "./pages/Mypage/MyInfo/MyInfo";
import MyWrote from "./pages/Mypage/Mywrote/MyWrote";
import Detail from "./pages/Detail/Detail";
import Interest from "./pages/Mypage/Interest/Interest";
import Recent from "./pages/Mypage/Recent/Recent";
import Recommend from "./pages/Mypage/Recommend/Recommend";
import ProfileSetting from "./pages/Mypage/ProfileSetting/ProfileSetting";
import MyCourseMain from "./pages/MyCourse/MyCourseMain/MyCourseMain";
import Notice from "./pages/Notice/Notice";
import MyCourseBoard from "./pages/Community/MyCourseBoard/MyCourseBoard";

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
      {/* <Interest /> */}
      {/* <Recent /> */}
      {/* <Recommend/> */}
      {/* <ProfileSetting /> */}
      {/* <MyCourseMain /> */}
      {/* <Notice /> */}
      <MyCourseBoard />
    </div>
  </>
);

export default App;
