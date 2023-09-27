import styles from "./CommunityCategory.module.css";
import {Link} from "react-router-dom";

export const CommunityCategory = () => (
  <>
    <div className={styles["community-category-container"]}>
      <div className={styles["community-category-title-container"]}>
        <Link to="/MyCourseBoard" className={styles["community-category-mycourse"]}>
          나만의 코스 게시판
        </Link>

        <Link to="/WorryBoard" className={styles["community-category-worry"]}>
          고민 게시판
        </Link>

        <Link to="/FreeBoard" className={styles["community-category-free"]}>
          자유 게시판
        </Link>

        <Link to="/InquiryBoardFrequent" className={styles["community-category-inquiry"]}>
          문의 게시판
        </Link>
      </div>
    </div>
  </>
);
