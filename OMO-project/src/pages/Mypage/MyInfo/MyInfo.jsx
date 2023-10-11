import styles from "./MyInfo.module.css";
import Mypage from "../../../components/Mypage/Mypage";
import LogoCircle from "../../../assets/logo-circle.png";
import ProfileDefault from "../../../assets/profile-default.png";
import MyInfoIcon from "../../../assets/my-page/my-info/my-info.png";

const MyInfo = () => (
  <div className={styles["myinfo-total-container"]}>
    <h2 className={styles["myinfo-title-container"]}>
      <img src={MyInfoIcon} alt="내 정보 아이콘" /> 내 정보
    </h2>
    <div className={styles["myinfo-categories-container"]}>
      <Mypage />
      <div className={styles["myinfo-logo-info-container"]}>
        <img className={styles["myinfo-circle-logo"]} src={ProfileDefault} alt="기본 프로필" />
        <div className={styles["myinfo-info-container"]}>
          <div className={styles["myinfo-nickname-container"]}>
            <p>닉네임</p>
            <p className={styles["myinfo-nickname-line"]}>|</p>
            <p>이니</p>
          </div>
          <div className={styles["myinfo-email-container"]}>
            <p>이메일</p>
            <p className={styles["myinfo-email-line"]}>|</p>
            <p>hhi9037@naver.com</p>
          </div>
          <div className={styles["myinfo-birthday-container"]}>
            <p>생년월일</p>
            <p className={styles["myinfo-birthday-line"]}>|</p>
            <p>1996-04-16</p>
          </div>
          <div className={styles["myinfo-mbti-container"]}>
            <p>MBTI</p>
            <p className={styles["myinfo-mbti-line"]}>|</p>
            <p>ISTJ</p>
          </div>
        </div>
        <div className={styles["myinfo-status-container"]}>
          <p className={styles["myinfo-status-myStatus"]}>내 정보</p>
          <div className={styles["myinfo-status-heart"]}>
            <p className={styles["myinfo-status-heart-title"]}>내 관심 수</p>
            <p className={styles["myinfo-status-heart-num"]}>4</p>
          </div>
          <div className={styles["myinfo-status-thumb"]}>
            <p className={styles["myinfo-status-thumb-title"]}>내 추천 수</p>
            <p className={styles["myinfo-status-thumb-num"]}>4</p>
          </div>
          <div className={styles["myinfo-status-write"]}>
            <p className={styles["myinfo-status-write-title"]}>내가 쓴 글</p>
            <p className={styles["myinfo-status-write-num"]}>4</p>
          </div>
          <div className={styles["myinfo-status-course"]}>
            <p className={styles["myinfo-status-course-title"]}>나의 코스</p>
            <p className={styles["myinfo-status-course-num"]}>4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MyInfo;
