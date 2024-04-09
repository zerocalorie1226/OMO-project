import styles from "./Main.module.css";
import {CategoryBox} from "../../components/CategoryBox/CategoryBox";
import {main} from "../../const/main";
import {Weather} from "../../components/Weather/Weather";
import Search from "../../components/Search/Search";
import {useState} from "react";
import axios from "axios";

const Main = () => {
  const [searchResults, setSearchResults] = useState([]);

  // 여기서 서버로 검색 쿼리를 전송하고 결과를 받아오는 로직을 구현
  // 결과를 setSearchResults를 통해 저장
  const handleSearch = async (query) => {
    try {
      // 주소 뭐 써야하는지 모르겠음. 수정 필요
      const response = await axios.get(`https://api.oneulmohae.co.kr/list/한식?page=1`, {
        params: {
          q: query
        },
        headers: {
          x: 126.647861,
          y: 37.443504
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <Weather />
      <div className={styles["main-category-container"]}>
        {main.map((el) => {
          return <CategoryBox key={el.id} {...el} />;
        })}
      </div>
    </>
  );
};
export default Main;
