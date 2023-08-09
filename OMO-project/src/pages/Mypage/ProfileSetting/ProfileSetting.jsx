import styles from "./ProfileSetting.module.css";
import SettingIcon from "../../../assets/my-page/setting/profile-setting.png";
import Mypage from "../../../components/Mypage/Mypage";
import ProfileChange from "../../../components/MypageProfileSetting/ProfileChange/ProfileChange";

const ProfileSetting = () => (
  <div className={styles["profileSetting-total-container"]}>
    <h2 className={styles["profileSetting-title-container"]}>
      <img src={SettingIcon} alt="프로필 설정" /> 프로필 설정
    </h2>
    <div className={styles["profileSetting-categories-main-container"]}>
      <Mypage />
      <div className={styles["profileSetting-main-container"]}>
        {/* <div className={styles["profileSetting-main-profileChange-container"]}>
          <p className={styles["profileSetting-main-profileChange-title"]}>프로필 변경</p>
          <img src={ProfileImg} alt="프로필 사진" className={styles["profileSetting-main-profileChange-img"]} />
          <a className={styles["profileSetting-main-profileChange-background"]}></a>
          <img src={ImgChange} alt="이미지 변경" className={styles["profileSetting-main-profileChange-changeImg"]} />
          <a href="#" className={styles["profileSetting-main-profileChange-click"]}></a>
        </div> */}
        <ProfileChange />
        <div className={styles["profileSetting-main-passwordChange-container"]}></div>
      </div>
    </div>
  </div>
);

export default ProfileSetting;
