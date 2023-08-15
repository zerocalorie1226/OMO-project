import styles from "./MyCourseBoard.module.css";
import Filter from "../../../components/Filter/Filter";
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import ListSearch from "./../../../components/ListSearch/ListSearch";
import {communityPageFilter} from "./../../../const/communityPageFilter";
import {communityMyCourse} from "../../../const/communityMyCourse";
import CommunityMyCourseList from "../../../components/CommunityMyCourseList/CommunityMyCourseList";

const MyCourseBoard = () => (
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

    {/* 리스트 */}

    <section className={styles["community-mycourse-container"]}>
      <div className={styles["community-mycourse-list-box"]}>
        {communityMyCourse.map((el) => {
          return <CommunityMyCourseList key={el.id} title={el.title} like={el.like} nick={el.nick} reg_at={el.reg_at} />;
        })}
      </div>
    </section>

    <ScrollToTop />
  </>
);

export default MyCourseBoard;
