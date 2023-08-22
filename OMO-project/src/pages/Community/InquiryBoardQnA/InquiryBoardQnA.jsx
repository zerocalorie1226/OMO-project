import {CommunityCategory} from "../../../components/CommunityCategory/CommunityCategory";
import CommunityInquiryBox from "../../../components/CommunityInquiryBox/CommunityInquiryBox";
import {CommunityQnaBox} from "../../../components/CommunityQnaBox/CommunityQnaBox";
import ListSearch from "../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import {communityInquiryFrequent} from "../../../const/communityInquiryFrequent";
import {communityInquiryFrequentFilter} from "../../../const/communityInquiryFrequentFilter";
import {communityQnAPost} from "../../../const/communityQnAPost";
import styles from "./InquiryBoardQnA.module.css";

const InquiryBoardQnA = () => (
  <div>
    <CommunityCategory />
    <div className={styles["inquiryboardqna-filter-search-container"]}>
      <div className={styles["inquiryboardqna-filter-container"]}>
        <a href="#" className={styles["inquiryboardqna-filter-frequency"]}>
          자주 하는 질문
        </a>
        <span className={styles["inquiryboardqna-filter-bar"]}>|</span>
        <a href="#" className={styles["inquiryboardqna-filter-qna"]}>
          QnA
        </a>
      </div>
      <ListSearch />
    </div>
    <hr className={styles["inquiryboardqna-hr"]} />
    {communityQnAPost.map((el) => {
      return (
        <CommunityQnaBox
          key={el.id}
          title={el.title}
          reg_at={el.reg_at}
          src={el.src}
          nick={el.nick}
          content={el.content}
          like={el.like}
          view={el.view}
          comment={el.comment}
          comment_list={el.comment_list}
        />
      );
    })}
    <ScrollToTop />
    <WritingButton />
  </div>
);

export default InquiryBoardQnA;
