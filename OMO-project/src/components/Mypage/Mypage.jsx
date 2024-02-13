import styles from "./Mypage.module.css";

import {Link} from "react-router-dom";

import ProfileDefault from "../../assets/profile-default.png";
import MyInfoIcon from "../../assets/my-page/my-info/my-info.png";
import MyInfoHeart from "../../assets/my-page/my-info/empty-heart.png";
import MyInfoWrote from "../../assets/my-page/my-info/my-writing.png";
import MyInfoSetting from "../../assets/my-page/my-info/profile-setting.png";
import MyInfoRecent from "../../assets/my-page/my-info/recent-place.png";
import MyInfoThumb from "../../assets/my-page/my-info/empty-thumb.png";

const Mypage = () => (
  <>
    <div className={styles["myinfo-categories-list"]}>
      <div className={styles["myinfo-categories-list-inFoContainer"]}>
        <img className={styles["myinfo-categories-list-logo"]} src={ProfileDefault} alt="기본 프로필" />
        <p className={styles["myinfo-categories-list-nickname"]}>이니</p>
        <p className={styles["myinfo-categories-list-mbti"]}>ISTJ</p>
      </div>
      <div className={styles["myinfo-categories-mypage-container"]}>
        <p className={styles["myinfo-categories-mypage"]}>My page</p>
      </div>
      <div className={styles["myinfo-categories-list-container"]}>
        <Link to="/MyInfo" className={styles["myinfo-categories-myinfo-container"]}>
          <img className={styles["myinfo-categories-myinfo-icon"]} src={MyInfoIcon} alt="내 정보 아이콘" />
          <p className={styles["myinfo-categories-myinfo-text"]}> 내 정보</p>
        </Link>

        <Link to="/Interest" className={styles["myinfo-categories-heart-container"]}>
          <img className={styles["myinfo-categories-heart-icon"]} src={MyInfoHeart} alt="관심 목록 아이콘" />
          <p className={styles["myinfo-categories-heart-text"]}> 관심 목록</p>
        </Link>

        <Link to="/Recommend" className={styles["myinfo-categories-thumb-container"]}>
          <img className={styles["myinfo-categories-thumb-icon"]} src={MyInfoThumb} alt="추천한 장소 아이콘" />
          <p className={styles["myinfo-categories-thumb-text"]}> 추천한 장소</p>
        </Link>

        <Link to="/Recent" className={styles["myinfo-categories-recent-container"]}>
          <img className={styles["myinfo-categories-recent-icon"]} src={MyInfoRecent} alt="최근 본 아이콘" />
          <p className={styles["myinfo-categories-recent-text"]}> 최근 본 장소</p>
        </Link>

        <Link to="/MyWrote" className={styles["myinfo-categories-wrote-container"]}>
          <img className={styles["myinfo-categories-wrote-icon"]} src={MyInfoWrote} alt="내가 쓴 글 아이콘" />
          <p className={styles["myinfo-categories-wrote-text"]}> 내가 쓴 글</p>
        </Link>

        <Link to="/ProfileSetting" className={styles["myinfo-categories-setting-container"]}>
          <img className={styles["myinfo-categories-setting-icon"]} src={MyInfoSetting} alt="프로필 설정 아이콘" />
          <p className={styles["myinfo-categories-setting-text"]}> 프로필 설정</p>
        </Link>
      </div>
    </div>
  </>
);

export default Mypage;
