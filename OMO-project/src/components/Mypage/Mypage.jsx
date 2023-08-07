import styles from "./Mypage.module.css";

import LogoCircle from "../../assets/logo-circle.png";
import MyInfoIcon from "../../assets/my-page/my-info/my-info.png";
import MyInfoHeart from "../../assets/my-page/my-info/empty-heart.png";
import MyInfoWrote from "../../assets/my-page/my-info/my-writing.png";
import MyInfoSetting from "../../assets/my-page/my-info/profile-setting.png";
import MyInfoRecent from "../../assets/my-page/my-info/recent-place.png";
import MyInfoThumb from "../../assets/my-page/my-info/empty-thumb.png";

const Mypage = () => (
  <>
    <div className={styles["myInfo-categories-list"]}>
      <div className={styles["myInfo-categories-list-inFoContainer"]}>
        <img className={styles["myInfo-categories-list-logo"]} src={LogoCircle} alt="메인 로고 동그라미" />
        <p className={styles["myInfo-categories-list-nickName"]}>이니</p>
        <p className={styles["myInfo-categories-list-mbti"]}>ISTJ</p>
      </div>
      <div className={styles["myInfo-categories-myPage-container"]}>
        <p className={styles["myInfo-categories-myPage"]}>My page</p>
      </div>
      <div className={styles["myInfo-categories-list-container"]}>
        <a href="#" className={styles["myInfo-categories-myInfo-container"]}>
          <img className={styles["myInfo-categories-myInfo-icon"]} src={MyInfoIcon} alt="내 정보 아이콘" />
          <p className={styles["myInfo-categories-myInfo-text"]}> 내 정보</p>
        </a>

        <a href="#" className={styles["myInfo-categories-heart-container"]}>
          <img className={styles["myInfo-categories-heart-icon"]} src={MyInfoHeart} alt="관심 목록 아이콘" />
          <p className={styles["myInfo-categories-heart-text"]}> 관심 목록</p>
        </a>

        <a href="#" className={styles["myInfo-categories-thumb-container"]}>
          <img className={styles["myInfo-categories-thumb-icon"]} src={MyInfoThumb} alt="추천한 장소 아이콘" />
          <p className={styles["myInfo-categories-thumb-text"]}> 추천한 장소</p>
        </a>

        <a href="#" className={styles["myInfo-categories-recent-container"]}>
          <img className={styles["myInfo-categories-recent-icon"]} src={MyInfoRecent} alt="최근 본 아이콘" />
          <p className={styles["myInfo-categories-recent-text"]}> 최근 본 장소</p>
        </a>

        <a href="#" className={styles["myInfo-categories-wrote-container"]}>
          <img className={styles["myInfo-categories-wrote-icon"]} src={MyInfoWrote} alt="내가 쓴 글 아이콘" />
          <p className={styles["myInfo-categories-wrote-text"]}> 내가 쓴 글</p>
        </a>

        <a href="#" className={styles["myInfo-categories-setting-container"]}>
          <img className={styles["myInfo-categories-setting-icon"]} src={MyInfoSetting} alt="프로필 설정 아이콘" />
          <p className={styles["myInfo-categories-setting-text"]}> 프로필 설정</p>
        </a>
      </div>
    </div>
  </>
);

export default Mypage;
