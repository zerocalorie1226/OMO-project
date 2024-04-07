import styles from "./Search.module.css";
import LogoCircle from "../../assets/logo-circle.png";
import Magnifier from "../../assets/magnifier.png";
import Location from "../../assets/main/location.png";
import { useState } from "react";

const Search = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {  // input 입력값 받음
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 사용자가 입력한 쿼리를 부모 컴포넌트로 전달
    onSearch(query);
  };

  return (
    <div className={styles["main-search-wrapper"]} onSubmit={handleSubmit} >
      <form className={styles["main-search-container"]}>
        <div className={styles["main-search-input-container"]}>
          <img className={styles["main-search-logocircle"]} src={LogoCircle} alt="로고 동그라미" />
          <input
            className={styles["main-search-input"]}
            type="text"
            placeholder="가고 싶은 장소의 정확한 도로명을 입력해주세요. (ex. 마포구(O), 홍대(X))"
            value={query}
            onChange={handleInputChange}
            maxLength={35}
          />
          <button className={styles["main-search-button"]} type="submit">
            <img src={Magnifier} alt="돋보기" />
          </button>
        </div>
      </form>
      <div className={styles["main-search-location-container"]}>
        <img src={Location} alt="위치" />
        <div className={styles["main-search-location-current"]}>현재 설정된 위치 : 마포구 </div>
      </div>
    </div>
  );
};
export default Search;
