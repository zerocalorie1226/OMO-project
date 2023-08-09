import styles from "./ProfileChange.module.css";
import ImgChange from "../../../assets/my-page/setting/white-pencil.png";
import ProfileImg from "../../../assets/profile-img.jpg";

const ProfileChange = () => (
  <div className={styles["profileSetting-main-profileChange-container"]}>
    <p className={styles["profileSetting-main-profileChange-title"]}>프로필 변경</p>
    <img src={ProfileImg} alt="프로필 사진" className={styles["profileSetting-main-profileChange-img"]} />
    <a className={styles["profileSetting-main-profileChange-background"]}></a>
    <img src={ImgChange} alt="이미지 변경" className={styles["profileSetting-main-profileChange-changeImg"]} />
    <a href="#" className={styles["profileSetting-main-profileChange-click"]}></a>
  </div>
);

export default ProfileChange;
