import React, {useState, useEffect, useRef, useCallback} from "react";
import {useParams, useNavigate} from "react-router-dom";
import styles from "./List.module.css";
import ListSearch from "../../components/ListSearch/ListSearch";
import {ListBox} from "../../components/ListBox/ListBox";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";
import axios from "axios";
import {Loading} from "../../components/Loading/Loading";

const List = ({setRecentData, searchResultsX, searchResultsY, defaultListImg, isLoggedIn}) => {
  const {category: categoryParam} = useParams();
  const category = categoryParam || "all";
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능한 서비스입니다.");
      navigate("/Login", {replace: true});
    }
  }, [isLoggedIn, navigate]);

  const addRecentItem = (item) => {
    const newItem = {
      id: item.id,
      place_name: item.place_name,
      mine: item.mine,
      recommend: item.recommend,
      address_name: item.address_name,
      road_address_name: item.road_address_name,
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

  const [listData, setListData] = useState([]);
  const [maxPage, setMaxPage] = useState(0);
  const [pagenation, setPagenation] = useState(1);
  const [loading, setLoading] = useState(false);

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pagenation < maxPage) {
          setPagenation((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, maxPage, pagenation]
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/place/list/${category}?page=${pagenation}`, {
          headers: {
            x: searchResultsX,
            y: searchResultsY,
          },
        });

        // 데이터 형식 확인 및 오류 방지
        const documents = Array.isArray(response.data.documents) ? response.data.documents : [];
        setListData((prevData) => [...prevData, ...documents]);
        setMaxPage(response.data.meta.pageable_count || 0);
      } catch (error) {
        console.error("리스트를 불러오는데 실패하였습니다.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, pagenation, searchResultsX, searchResultsY]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = listData.filter((item) => {
    return item.place_name && item.place_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      {loading && listData.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <div className={styles["list-component-container"]}>
            <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
          </div>
          <section className={styles["list-list-container"]}>
            {filteredData.length > 0 ? (
              <div className={styles["list-list-box-container"]}>
                {filteredData.map((item, index) => {
                  if (index === filteredData.length - 1) {
                    return <ListBox ref={lastElementRef} key={`${item.id}-${index}`} id={item.id} {...item} addRecentItem={() => addRecentItem(item)} defaultListImg={defaultListImg} />;
                  } else {
                    return <ListBox key={`${item.id}-${index}`} id={item.id} {...item} addRecentItem={() => addRecentItem(item)} defaultListImg={defaultListImg} />;
                  }
                })}
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
