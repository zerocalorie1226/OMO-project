import './App.module.css';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
// import Eating from './pages/sub/eating/Eating';
import Watching from './pages/sub/watching/Watching';
// import Main from './pages/main/Main';


function App() {
  return (
    <>
      <div>
      <Header></Header>
      <Search></Search>

      {/* <Main></Main> */}
      {/* <Eating></Eating> */}
      <Watching></Watching>
      </div>
    </>
  );
}

export default App;
