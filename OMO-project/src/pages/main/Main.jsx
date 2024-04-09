import styles from "./Main.module.css";
import {CategoryBox} from "../../components/CategoryBox/CategoryBox";
import {main} from "../../const/main";
import {Weather} from "../../components/Weather/Weather";
import Search from "../../components/Search/Search";
import {useState} from "react";
import axios from "axios";

const Main = ({setSearchResultsX,setSearchResultsY}) => {
  const [query, setQuery] = useState('');

  // 여기서 서버로 검색 쿼리를 전송하고 결과를 받아오는 로직을 구현
  // 결과를 setSearchResults를 통해 저장
  const handleSearch = async (query) => {
    try {
      // 주소 뭐 써야하는지 모르겠음. 수정 필요
      const response = await axios.get(`https://api.oneulmohae.co.kr/local/${query}`, {
        params: {
          q: query
        },
      });
      setSearchResultsX(response.data.documents[0].x);
      setSearchResultsY(response.data.documents[0].y);
      console.log(response.data.documents[0].x)
      console.log( response.data.documents[0].y)
      
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    }
  };

  return (
    <>
      <Search onSearch={handleSearch} query={query} setQuery={setQuery} />
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
