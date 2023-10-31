import styles from "./MyCourseBoard.module.css";
import {useState} from "react";
import {communityPageFilter} from "./../../../const/communityPageFilter";
import {communityMyCourse} from "../../../const/communityMyCourse";
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory";
import Filter from "../../../components/Filter/Filter";
import ListSearch from "./../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import CommunityMyCourseList from "../../../components/CommunityMyCourseList/CommunityMyCourseList";
import {Link} from "react-router-dom";
import {mbtiBox} from "../../../const/mbtiBox";
import { MbtiBox } from "../../../components/MbtiBox/MbtiBox";
const MyCourseBoard = () => {

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

      {/* 리스트 */}

      <section className={styles["community-mycourse-container"]}>
        {/* MBTI pick */}

        <div className={styles["community-mbti-pick-container"]}>
          <span className={styles["community-mbti-pick-title"]}>MBTI별 pick</span>
          <ul className={styles["community-mbti-pick-box"]}>
            {mbtiBox.map((e) => {
              return (
                <MbtiBox key={e.id} data={e} />
              );
            })}
          </ul>
        </div>
        <div className={styles["community-mycourse-list-box"]}>
          {communityMyCourse.map((el) => {
            return <CommunityMyCourseList key={el.id} title={el.title} like={el.like} nick={el.nick} reg_at={el.reg_at} />;
          })}
        </div>
      </section>

      <ScrollToTop />
      <Link to="/WriteBoard">
        <WritingButton />
      </Link>
    </>
  );
};

export default MyCourseBoard;