import styles from "./WorryBoard.module.css";
import {communityPageFilter} from "./../../../const/communityPageFilter";
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory";
import Filter from "../../../components/Filter/Filter";
import ListSearch from "./../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import {Link} from "react-router-dom";
import { CommunityWorryPostList } from "../../../components/CommunityWorryPostList/CommunityWorryPostList";

const WorryBoard = () => {

 
  return(
  <>
    {/* 카테고리 */}
    <CommunityCategory />

      {/* 필터 + 검색창 */}
      <div className={styles["community-component-container"]}>
        <div className={styles["community-filter-container"]}>
          {communityPageFilter.map((el) => {
            return <Filter key={el.id} {...el} />;
          })}
        </div>
        <ListSearch />
      </div>

      {/* 게시글 리스트 */}
      <CommunityWorryPostList />

      {/* 스크롤 */}
      <ScrollToTop />

      {/* 글쓰기 */}
      <Link to="/WriteBoard">
        <WritingButton />
      </Link>
    </>
  );
};

export default WorryBoard;
