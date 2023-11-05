import {CommunityCategory} from "../../../components/CommunityCategory/CommunityCategory";
import CommunityInquiryBox from "../../../components/CommunityInquiryBox/CommunityInquiryBox";
import CommunityInquiryFilter from "../../../components/CommunityInquiryFilter/CommunityInquiryFilter";
import ListSearch from "../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import {communityInquiryFrequent} from "../../../const/communityInquiryFrequent";
import styles from "./InquiryBoardFrequent.module.css";
import {Link} from "react-router-dom";

const InquiryBoardFrequent = () => (
  <div>
    <CommunityCategory />
    <div className={styles["inquiry-board-filter-search-container"]}>
      <CommunityInquiryFilter />
      <ListSearch />
    </div>
    <hr className={styles["inquiry-board-hr"]} />
    {communityInquiryFrequent.map((el) => {
      return <CommunityInquiryBox key={el.id} {...el} />;
    })}
    <ScrollToTop />
    <Link to="/WriteBoard">
      <WritingButton />
    </Link>
  </div>
);

export default InquiryBoardFrequent;
