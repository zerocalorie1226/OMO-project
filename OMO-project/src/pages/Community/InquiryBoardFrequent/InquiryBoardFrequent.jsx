import axios from "axios";
import { useEffect, useState } from "react";
import {CommunityCategory} from "../../../components/CommunityCategory/CommunityCategory";
import CommunityInquiryBox from "../../../components/CommunityInquiryBox/CommunityInquiryBox";
import CommunityInquiryFilter from "../../../components/CommunityInquiryFilter/CommunityInquiryFilter";
import ListSearch from "../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import styles from "./InquiryBoardFrequent.module.css";

const InquiryBoardFrequent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [frequents, setFrequents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/board/Qna/FAQ?page=1&size=10&sorting=createdAt`);
        setFrequents(response.data.data);
      } catch (error) {
        console.error("에러야", error);
      }
    };

    fetchData();
  }, []); 

  const filteredData = frequents.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <CommunityCategory />
      <div className={styles["inquiry-board-filter-search-container"]}>
        <CommunityInquiryFilter />
        <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
      </div>
      <hr className={styles["inquiry-board-hr"]} />
      {filteredData && filteredData.length > 0 ? (
        <div>
          {filteredData.map((el) => {
            return <CommunityInquiryBox key={el.id} {...el} />;
          })}
        </div>
      ) : (
        <div className={styles["list-no-search-result-container"]}>
          <span className={styles["list-no-search-result"]}>검색 결과가 없습니다.</span>
        </div>
      )}
      <ScrollToTop />
    </div>
  );
};

export default InquiryBoardFrequent;
