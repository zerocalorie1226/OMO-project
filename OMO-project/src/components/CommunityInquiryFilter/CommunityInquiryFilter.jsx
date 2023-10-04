import styles from "./CommunityInquiryFilter.module.css";
import {Link} from "react-router-dom";

const CommunityInquiryFilter = () => (
  <div className={styles["inquiry-board-filter-container"]}>
    <Link to="/InquiryBoardFrequent" className={styles["inquiry-board-filter-frequency"]}>
      자주 하는 질문
    </Link>
    <span className={styles["inquiry-board-filter-bar"]}>|</span>
    <Link to="/InquiryBoardQnA" className={styles["inquiry-board-filter-qna"]}>
      QnA
    </Link>
  </div>
);

export default CommunityInquiryFilter;
