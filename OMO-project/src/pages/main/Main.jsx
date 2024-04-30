import styles from "./Main.module.css";
import {CategoryBox} from "../../components/CategoryBox/CategoryBox";
import {main} from "../../const/main";
import {Weather} from "../../components/Weather/Weather";
import Search from "../../components/Search/Search";
import {useState} from "react";
import axios from "axios";

const Main = ({setSearchResultsX,setSearchResultsY, location, setLocation}) => {
  
  const [query, setQuery] = useState('');


  
 
  // 여기서 서버로 검색 쿼리를 전송하고 결과를 받아오는 로직을 구현
  // 결과를 setSearchResults를 통해 저장
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://api.oneulmohae.co.kr/local/${query}`, {
        params: {
          q: query
        },
      });
      const addressName = response.data.documents[0].address_name;
      setSearchResultsX(response.data.documents[0].x);
      setSearchResultsY(response.data.documents[0].y);
      alert(`주소가 ${addressName}로 설정되었습니다.`)
      setLocation(addressName);
    } catch (error) {
     alert("가고 싶은 장소의 시/군/구를 정확히 입력해주세요. \n예시) 홍대입구 (X), 마포구 (O) \n \n같은 도로명 주소가 여러 개 있을 경우 시, 도를 입력해 주셔야 정확한 주소가 설정됩니다. \n예시) 신천로 27 (X), 울산광역시 북구 신천로 27 (O)", error);
    }
  };

  return (
    <>
      <Search handleSearch={handleSearch} query={query} setQuery={setQuery} location={location} setLocation={setLocation} />
      {/* <Weather /> */}
      <div className={styles["main-category-container"]}>
        {main.map((el) => {
          return <CategoryBox key={el.id} {...el} />;
        })}
      </div>
    </>
  );
};
export default Main;
