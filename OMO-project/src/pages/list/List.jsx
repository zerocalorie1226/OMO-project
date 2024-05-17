import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import styles from "./List.module.css";
import ListSearch from "../../components/ListSearch/ListSearch";
import {ListBox} from "../../components/ListBox/ListBox";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";

const List = ({recentData, setRecentData, dataCopy, searchResultsX, searchResultsY,defaultListImg,setDefaultListImg}) => {
  // useParams를 사용하여 category 값을 가져옵니다.
  const {category: categoryParam} = useParams();

  // URL에서 받아온 category 값이 없는 경우 'all'로 간주합니다.
  const category = categoryParam || "all";

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
      src3: item.src3,
    };

    setRecentData((prevData) => {
      const existingIndex = prevData.findIndex((recentItem) => recentItem.id === item.id);
      let updatedData = [...prevData];
      if (existingIndex === -1) {
        // 아이템이 최근 본 목록에 없는 경우 추가
        updatedData.unshift(newItem);
      }
      return updatedData;
    });
  };

  const [listData, setListData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/place/list/${category}?page=1`, {
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

  // console.log("리스트데이터: ",listData);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = listData
    ? listData.filter((item) => {
        return item.place_name && item.place_name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    : [];

  // console.log(listData[0].id);

  const onSearch = (term) => {
    setSearchTerm(term); // 검색어 상태 업데이트
  };

  return (
    <>
      {filteredData === null ? (
        <Loading/>
      ) : (
        <div>
          <div className={styles["list-component-container"]}>
            <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
          </div>
          <section className={styles["list-list-container"]}>
            {filteredData && filteredData.length > 0 ? ( // filteredData가 null 또는 undefined인지 확인
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
