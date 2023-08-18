import styles from "./MyCourseBoard.module.css";
import { useState } from "react";
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
import DeepPurpleI from "../../../assets/community/my-course-board/I-deep-purple.png";
import DeepPurpleE from "../../../assets/community/my-course-board/E-deep-purple.png";
import DeepPurpleJ from "../../../assets/community/my-course-board/J-deep-purple.png";
import DeepPurpleP from "../../../assets/community/my-course-board/P-deep-purple.png";

const MyCourseBoard = () => {
  const [imageSrcI, setImageSrcI] = useState(LightPurpleI); // 초기 상태는 선택이 되지 않은 상태를 나타내기 위함
  const [isClickedI, setIsClickedI] = useState(false); // 클릭 여부를 state로 관리

  const [imageSrcE, setImageSrcE] = useState(LightPurpleE); // 초기 상태는 선택이 되지 않은 상태를 나타내기 위함
  const [isClickedE, setIsClickedE] = useState(false); // 클릭 여부를 state로 관리

  const [imageSrcJ, setImageSrcJ] = useState(LightPurpleJ); // 초기 상태는 선택이 되지 않은 상태를 나타내기 위함
  const [isClickedJ, setIsClickedJ] = useState(false); // 클릭 여부를 state로 관리

  const [imageSrcP, setImageSrcP] = useState(LightPurpleP); // 초기 상태는 선택이 되지 않은 상태를 나타내기 위함
  const [isClickedP, setIsClickedP] = useState(false); // 클릭 여부를 state로 관리

  const handleClickI = () => {
    if (isClickedI) {
      setImageSrcI(LightPurpleI);
        setIsClickedI(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
      } else {
        setImageSrcI(DeepPurpleI);
        setIsClickedI(true); // true일 땐 변경될 이미지 src
      }
  };

  const handleClickE = () => {
    if (isClickedE) {
      setImageSrcE(LightPurpleE);
        setIsClickedE(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
      } else {
        setImageSrcE(DeepPurpleE);
        setIsClickedE(true); // true일 땐 변경될 이미지 src
      }
  };

  const handleClickJ = () => {
    if (isClickedJ) {
      setImageSrcJ(LightPurpleJ);
        setIsClickedJ(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
      } else {
        setImageSrcJ(DeepPurpleJ);
        setIsClickedJ(true); // true일 땐 변경될 이미지 src
      }
  };

  const handleClickP = () => {
    if (isClickedP) {
      setImageSrcP(LightPurpleP);
        setIsClickedP(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
      } else {
        setImageSrcP(DeepPurpleP);
        setIsClickedP(true); // true일 땐 변경될 이미지 src
      }
  };


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

    {/* 리스트 */}

    <section className={styles["community-mycourse-container"]}>

      {/* MBTI pick */}

      <div className={styles["community-mbti-pick-container"]}>
        <span className={styles["community-mbti-pick-title"]}>MBTI별 pick</span>
        <ul className={styles["community-mbti-pick-box"]}>
          <li>
            <button type="button" onClick={handleClickI} className={styles["community-mbti-pick-box-i"]}>
              <img src={imageSrcI} alt="MBTI I 아이콘"></img>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleClickE} className={styles["community-mbti-pick-box-e"]}>
              <img src={imageSrcE} alt="MBTI E 아이콘"></img>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleClickJ} className={styles["community-mbti-pick-box-j"]}>
              <img src={imageSrcJ} alt="MBTI J 아이콘"></img>
            </button>
          </li>
          <li>
            <button type="button" onClick={handleClickP} className={styles["community-mbti-pick-box-p"]}>
              <img src={imageSrcP} alt="MBTI P 아이콘"></img>
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
      }

export default MyCourseBoard;
