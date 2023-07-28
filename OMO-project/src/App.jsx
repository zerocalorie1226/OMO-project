import './App.module.css';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
// import Main from './pages/main/Main';
import Signup from './pages/signup/Signup';
// import Eating from './pages/sub/eating/Eating';
// import Watching from './pages/sub/watching/Watching';
// import Playing from './pages/sub/playing/Playing';
// import ThemeCafe from './pages/sub/theme-cafe/ThemeCafe';


function App() {
  return (
    <>
      <div>
      <Header />
      {/* <Search /> */}
      <Signup />
      {/* <Main></Main> */}
      {/* <Eating></Eating> */}
      {/* <Watching></Watching> */}
      {/* <Playing></Playing> */}
      {/* <ThemeCafe></ThemeCafe> */}
      </div>
    </>
  );
}

export default App;
