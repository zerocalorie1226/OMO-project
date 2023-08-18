import styles from "./MyCourseBoard.module.css";
import Filter from "../../../components/Filter/Filter";
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import ListSearch from "./../../../components/ListSearch/ListSearch";
import {communityPageFilter} from "./../../../const/communityPageFilter";
import {communityMyCourse} from "../../../const/communityMyCourse";
import CommunityMyCourseList from "../../../components/CommunityMyCourseList/CommunityMyCourseList";
import LightPurpleI from "../../../assets/community/my-course-board/I-light-purple.png";
import LightPurpleE from "../../../assets/community/my-course-board/E-light-purple.png";
import LightPurpleJ from "../../../assets/community/my-course-board/J-light-purple.png";
import LightPurpleP from "../../../assets/community/my-course-board/P-light-purple.png";
// import DeepPurpleI from "../../../assets/community/my-course-board/I-deep-purple.png";
// import DeepPurpleE from "../../../assets/community/my-course-board/E-deep-purple.png";
// import DeepPurplJ from "../../../assets/community/my-course-board/J-deep-purple.png";
// import DeepPurpleP from "../../../assets/community/my-course-board/P-deep-purple.png";

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

      {/* MBTI pick */}

      <div className={styles["community-mbti-pick-container"]}>
        <span className={styles["community-mbti-pick-title"]}>MBTI별 pick</span>
        <ul className={styles["community-mbti-pick-box"]}>
          <li>
            <button type="button" className={styles["community-mbti-pick-box-i"]}>
              <img src={LightPurpleI} alt="MBTI I 아이콘"></img>
            </button>
          </li>
          <li>
            <button type="button" className={styles["community-mbti-pick-box-e"]}>
              <img src={LightPurpleE} alt="MBTI E 아이콘"></img>
            </button>
          </li>
          <li>
            <button type="button" className={styles["community-mbti-pick-box-j"]}>
              <img src={LightPurpleJ} alt="MBTI J 아이콘"></img>
            </button>
          </li>
          <li>
            <button type="button" className={styles["community-mbti-pick-box-p"]}>
              <img src={LightPurpleP} alt="MBTI P 아이콘"></img>
            </button>
          </li>
        </ul>
      </div>
      <div className={styles["community-mycourse-list-box"]}>
        {communityMyCourse.map((el) => {
          return <CommunityMyCourseList key={el.id} title={el.title} like={el.like} nick={el.nick} reg_at={el.reg_at} />;
        })}
      </div>
    </section>

    <ScrollToTop />
    <WritingButton />
  </>
);

export default MyCourseBoard;
