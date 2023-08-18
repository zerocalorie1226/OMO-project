import styles from "./WorryBoard.module.css";
import {communityPageFilter} from "./../../../const/communityPageFilter";
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory";
import Filter from "../../../components/Filter/Filter";
import ListSearch from "./../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";


const WorryBoard = () => {

  return(
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

    <section className={styles["community-worry-container"]}>

    </section>

    <ScrollToTop />
    <WritingButton />
  </>
);
      }

export default WorryBoard;
