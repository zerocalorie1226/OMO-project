import React, {useState} from "react";
import {CommunityCategory} from "../../../components/CommunityCategory/CommunityCategory";
import CommunityInquiryBox from "../../../components/CommunityInquiryBox/CommunityInquiryBox";
import CommunityInquiryFilter from "../../../components/CommunityInquiryFilter/CommunityInquiryFilter";
import ListSearch from "../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {communityInquiryFrequent} from "../../../const/communityInquiryFrequent";
import styles from "./InquiryBoardFrequent.module.css";

const InquiryBoardFrequent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = communityInquiryFrequent.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <CommunityCategory />
      <div className={styles["inquiry-board-filter-search-container"]}>
        <CommunityInquiryFilter />
        <ListSearch onSearch={handleSearch} searchTerm={searchTerm} />
      </div>
      <hr className={styles["inquiry-board-hr"]} />
      {filteredData.map((el) => {
        return <CommunityInquiryBox key={el.id} {...el} />;
      })}
      <ScrollToTop />
    </div>
  );
};

export default InquiryBoardFrequent;
