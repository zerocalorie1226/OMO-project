import styles from "./ProfileSetting.module.css";
import SettingIcon from "../../../assets/my-page/setting/profile-setting.png";
import Mypage from "../../../components/Mypage/Mypage";
import ProfileChange from "../../../components/MypageProfileSetting/ProfileChange/ProfileChange";
import PasswordChange from "../../../components/MypageProfileSetting/PasswordChange/PasswordChange";

const ProfileSetting = () => (
  <div className={styles["profileSetting-total-container"]}>
    <h2 className={styles["profileSetting-title-container"]}>
      <img src={SettingIcon} alt="프로필 설정" /> 프로필 설정
    </h2>
    <div className={styles["profileSetting-categories-main-container"]}>
      <Mypage />
      <div className={styles["profileSetting-main-container"]}>
        <ProfileChange />
        <PasswordChange />
      </div>
    </div>
  </div>
);

export default ProfileSetting;
