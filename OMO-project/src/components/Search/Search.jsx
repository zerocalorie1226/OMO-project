import styles from "./Search.module.css";
import LogoCircle from "../../assets/logo-circle.png";
import Magnifier from "../../assets/magnifier.png";



const Search = () => {
  // const [query, setQuery] = useState('');

  // const handleInputChange = (event) => {  // input 입력값 받음
  //   setQuery(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // 사용자가 입력한 쿼리를 부모 컴포넌트로 전달
  //   onSearch(query);
  // };



  return (
  <form className={styles["main-search-container"]} >
     <div className={styles["main-search-input-container"]}>
  <img  className={styles["main-search-logocircle"]} src={LogoCircle} alt="로고 동그라미" />
  <input className={styles["main-search-input"]}
    type="text"
    placeholder="검색어를 입력해 주세요."
    // value={query}
    // onChange={handleInputChange}
    maxLength={35}
  />
  <button className={styles["main-search-button"]} type="submit"><img src={Magnifier} alt="돋보기" /></button>
  </div>
</form>


);
  };
export default Search;
