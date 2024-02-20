import React from "react";
import styles from "./List.module.css";
import ListSearch from "../../components/ListSearch/ListSearch";
import { data } from "../../const/data";
import { ListBox } from "../../components/ListBox/ListBox";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import { useState } from "react";

const List = ({recentData, setRecentData}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
  const onSearch = (term) => {
    setSearchTerm(term);
  };

  const addRecentItem = (item) => {
    const selectedItem = { id: item.id, title: item.title,jjim:item.jjim,like:item.like,addressBrief:item.addressBrief,runTime:item.runTime,src1:item.src1 ,src2:item.src2,src3:item.src3};
  
    // 중복된 id가 없을 때만 최근 항목을 추가
    if (selectedItem) {
      setRecentData((prevData) => {
        const updatedData = [selectedItem, ...prevData.filter((recentItem) => recentItem.id !== item.id)];
  
        return updatedData;
      });
    }
  
    // 현재 상태를 로그에 출력

  };
  


  return (
    <>
      <div className={styles["list-component-container"]}>
        <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
      </div>
      <section className={styles["list-list-container"]}>
        {filteredData && filteredData.length > 0 ? (
          <div className={styles["list-list-box-container"]}>
            {filteredData.map((el) => (
              <ListBox
                key={el.id}
                {...el}
                addRecentItem={addRecentItem}
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
