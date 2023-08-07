import "./App.module.css";
import {Header} from "./components/Header/Header";

import Main from "./pages/main/Main";
// import Signup from "./pages/signup/Signup";
import Eating from "./pages/sub/eating/Eating";
import Watching from "./pages/sub/watching/Watching";
import Playing from "./pages/sub/playing/Playing";
import ThemeCafe from "./pages/sub/theme-cafe/ThemeCafe";
import Login from "./pages/login/Login";
import List from "./pages/list/list";
import MyInfo from "./pages/my-page/my-info/My-info";
import MyWrote from "./pages/my-page/my-wrote/My-wrote";

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
      {/* <MyInfo /> */}
      <MyWrote />
    </div>
  </>
);

export default App;
