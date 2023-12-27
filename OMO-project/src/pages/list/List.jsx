import React, {useState} from "react";
import styles from "./List.module.css";
import Filter from "../../components/Filter/Filter";
import ListSearch from "../../components/ListSearch/ListSearch";
import {data} from "../../const/data";
import {ListBox} from "../../components/ListBox/ListBox";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";

const List = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on the search term
  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className={styles["list-component-container"]}>
        <ListSearch onSearch={(term) => setSearchTerm(term)} />
      </div>
      <section className={styles["list-list-container"]}>
        <div className={styles["list-list-box-container"]}>
          {filteredData.map((el) => {
            return <ListBox key={el.id} {...el} />;
          })}
        </div>
      </section>
      <ScrollToTop />
    </>
  );
};

export default List;
