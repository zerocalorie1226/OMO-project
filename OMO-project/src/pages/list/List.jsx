import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./List.module.css";
import ListSearch from "../../components/ListSearch/ListSearch";
import { ListBox } from "../../components/ListBox/ListBox";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";

const List = ({ recentData, setRecentData, searchResultsX, searchResultsY, defaultListImg }) => {
  const { category: categoryParam } = useParams();
  const category = categoryParam || "all";


  const addRecentItem = (item) => {
    const newItem = {
      id: item.id,
      place_name: item.place_name,
      mine: item.mine,
      recommend: item.recommend,
      address_name: item.address_name,
      phone: item.phone,
      src1: item.src1,
      src2: item.src2,
      src3: item.src3,
    };

    setRecentData((prevData) => {
      const existingIndex = prevData.findIndex((recentItem) => recentItem.id === item.id);
      let updatedData = [...prevData];
      if (existingIndex === -1) {
        updatedData.unshift(newItem);
        localStorage.setItem("recentData", JSON.stringify(updatedData)); // updatedData를 localStorage에 저장
      }
      return updatedData;
    });
  };

  const [listData, setListData] = useState(null);
  const [maxPage, setMaxPage] = useState(0)
  const [pagenation, setPagenation] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/place/list/${category}?page=${pagenation}`, {
          headers: {
            x: searchResultsX,
            y: searchResultsY,
          },
        });
        setListData(response.data.documents);
        setMaxPage(response.data.meta.pageable_count)
        console.log(response.data.meta.pageable_count)
      } catch (error) {
        console.error("리스트를 불러오는데 실패하였습니다.", error);
      }
    };

    fetchData();
  }, [category, searchResultsX, searchResultsY]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = listData
    ? listData.filter((item) => {
        return item.place_name && item.place_name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    : [];

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      {filteredData === null ? (
        <Loading />
      ) : (
        <div>
          <div className={styles["list-component-container"]}>
            <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
          </div>
          <section className={styles["list-list-container"]}>
            {filteredData && filteredData.length > 0 ? (
              <div className={styles["list-list-box-container"]}>
                {filteredData.map((item) => (
                  <ListBox key={item.id} id={item.id} {...item} addRecentItem={() => addRecentItem(item)} defaultListImg={defaultListImg} />
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
