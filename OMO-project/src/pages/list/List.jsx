import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import styles from "./List.module.css";
import ListSearch from "../../components/ListSearch/ListSearch";
import { ListBox } from "../../components/ListBox/ListBox";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import axios from "axios";

const List = ({ recentData, setRecentData, dataCopy,searchResultsX,searchResultsY }) => {
  // useParams를 사용하여 category 값을 가져옵니다.
  const { category: categoryParam } = useParams();
  
  // URL에서 받아온 category 값이 없는 경우 'all'로 간주합니다.
  const category = categoryParam || 'all';
  
  const [searchTerm, setSearchTerm] = useState("");

  // 카테고리와 검색어 모두를 고려하여 데이터 필터링
  const filteredData = dataCopy.filter((item) => {
    const matchesCategory = category === 'all' || item.category.includes(category);
    const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const onSearch = (term) => {
    setSearchTerm(term); // 검색어 상태 업데이트
  };

  // 아이템을 최근 본 목록에 추가하는 함수
  const addRecentItem = (item) => {
    const newItem = {
      id: item.id,
      title: item.title,
      jjim: item.jjim,
      like: item.like,
      addressBrief: item.addressBrief,
      runTime: item.runTime,
      src1: item.src1,
      src2: item.src2,
      src3: item.src3
    };
  
    setRecentData((prevData) => {
      const existingIndex = prevData.findIndex((recentItem) => recentItem.id === item.id);
      let updatedData = [...prevData];
      if (existingIndex === -1) { // 아이템이 최근 본 목록에 없는 경우 추가
        updatedData.unshift(newItem);
      }
      return updatedData;
    });
  };

  console.log(searchResultsX)
  console.log(searchResultsY)
  console.log(category)

  const [listData, setListData] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/place/list/한식?page=1`, {
          headers: {
            x: searchResultsX,
            y: searchResultsY,
          },
        });
        console.log(response.data.documents);
        setListData(response.data.documents); // 서버로부터 받은 데이터를 상태에 저장
      } catch (error) {
        console.error("에러야", error);
      }
    };

    fetchData();
  }, []); // category가 변경될 때마다 데이터를 새로 가져옵니다.

console.log(listData);

  return (
    <>
          {listData === null ? (
  <div>Loading...</div>
) : (
  <div>
    <div className={styles["list-component-container"]}>
      <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
    </div>
    <section className={styles["list-list-container"]}>
      {listData && listData.length > 0 ? ( // listData가 null 또는 undefined인지 확인
        <div className={styles["list-list-box-container"]}>
          {listData.map((item) => (
            <ListBox
              key={item.id}
              {...item}
              addRecentItem={() => addRecentItem(item)}
            />
          ))}
        </div>
      ) : (
        <span className={styles["list-no-search-result"]}>검색 결과가 없습니다.</span>
      )}
    </section>
  </div>
)}
      <ScrollToTop />
    </>
  );
};

export default List;
