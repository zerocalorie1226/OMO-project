import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./List.module.css";
import ListSearch from "../../components/ListSearch/ListSearch";
import { ListBox } from "../../components/ListBox/ListBox";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";

const List = ({ recentData, setRecentData, dataCopy }) => {
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

  return (
    <>
      <div className={styles["list-component-container"]}>
        <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
      </div>
      <section className={styles["list-list-container"]}>
        {filteredData.length > 0 ? (
          <div className={styles["list-list-box-container"]}>
            {filteredData.map((item) => (
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
      <ScrollToTop />
    </>
  );
};

export default List;
