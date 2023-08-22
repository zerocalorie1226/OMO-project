import {CommunityCategory} from "../../../components/CommunityCategory/CommunityCategory";
import CommunityInquiryBox from "../../../components/CommunityInquiryBox/CommunityInquiryBox";
import Filter from "../../../components/Filter/Filter";
import ListSearch from "../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import {communityInquiryFrequent} from "../../../const/communityInquiryFrequent";
import {communityInquiryFrequentFilter} from "../../../const/communityInquiryFrequentFilter";
import styles from "./InquiryBoard.module.css";

const InquiryBoard = () => (
  <div>
    <CommunityCategory />
    <div className={styles["Inquiryboard-filter-search-container"]}>
      <div className={styles["Inquiryboard-filter-container"]}>
        <a href="#" className={styles["Inquiryboard-filter-frequency"]}>
          자주 하는 질문
        </a>
        <span className={styles["Inquiryboard-filter-bar"]}>|</span>
        <a href="#" className={styles["Inquiryboard-filter-qna"]}>
          QnA
        </a>
      </div>
      <ListSearch />
    </div>
    <hr className={styles["Inquiryboard-hr"]} />
    {communityInquiryFrequent.map((el) => {
      return <CommunityInquiryBox key={el.id} title={el.title} nickname={el.nickname} content={el.content} />;
    })}
    <ScrollToTop />
    <WritingButton />
  </div>
);

export default InquiryBoard;
