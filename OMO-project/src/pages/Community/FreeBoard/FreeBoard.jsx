import styles from "./FreeBoard.module.css";
import {communityPageFilter} from "./../../../const/communityPageFilter"; //필터 데이터
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory"; //카테고리
import Filter from "../../../components/Filter/Filter"; //필터 컴포넌트
import ListSearch from "./../../../components/ListSearch/ListSearch"; //검생창
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop"; //스크롤버튼
import {WritingButton} from "../../../components/WritingButton/WritingButton"; //글쓰기버튼
import {Link} from "react-router-dom";
import {CommunityFreePostList} from "../../../components/CommunityFreePostList/CommunityFreePostList";

const FreeBoard = () => {
  return (
    <>
      {/* 카테고리 */}
      <CommunityCategory />

      {/* 필터 + 검색창 */}
      <div className={styles["community-component-container"]}>
        <div className={styles["community-filter-container"]}>
          {communityPageFilter.map((el) => {
            return <Filter key={el.id} title={el.title} bar={el.bar} />;
          })}
        </div>
        <ListSearch />
      </div>

      {/* 게시글 리스트 */}
      <CommunityFreePostList />

      {/* 스크롤 */}
      <ScrollToTop /> 

      {/* 글쓰기 */}
      <Link to="/WriteBoard">
        <WritingButton />
      </Link>
    </>
  );
};

export default FreeBoard;
