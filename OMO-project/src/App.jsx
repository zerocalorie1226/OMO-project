import './App.module.css';
import { Header } from './components/Header/Header';

import Main from './pages/main/Main';
import Signup from './pages/signup/Signup';
import Eating from './pages/sub/eating/Eating';
import Watching from './pages/sub/watching/Watching';
import Playing from './pages/sub/playing/Playing';
import ThemeCafe from './pages/sub/theme-cafe/ThemeCafe';


function App() {
  return (
    <>
      <div>
      <Header />
      {/* <Main /> */}
      <Eating />
      {/* <Watching /> */}
      {/* <Playing /> */}
      {/* <ThemeCafe /> */}
      {/* <Signup /> */}
      </div>
    </>
  );
}

export default App;
