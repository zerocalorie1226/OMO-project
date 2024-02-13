import React, {useState} from "react";
import styles from "./List.module.css";
import Filter from "../../components/Filter/Filter";
import ListSearch from "../../components/ListSearch/ListSearch";
import {data} from "../../const/data";
import {ListBox} from "../../components/ListBox/ListBox";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";

const List = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className={styles["list-component-container"]}>
        <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
      </div>
      <section className={styles["list-list-container"]}>
        {filteredData && filteredData.length > 0 ? (
          <div className={styles["list-list-box-container"]}>
            {filteredData.map((el) => {
              return <ListBox key={el.id} {...el} />;
            })}
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
