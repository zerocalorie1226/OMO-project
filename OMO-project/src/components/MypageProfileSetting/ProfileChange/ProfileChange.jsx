import styles from "./ProfileChange.module.css";
import AddImg from "../../../assets/my-page/setting/profile-add.png";
import DeleteImg from "../../../assets/my-page/setting/profile-delete.png";
// import ProfileImg from "../../../assets/profile-img.jpg";

const ProfileChange = () => (
  <div className={styles["profile-setting-main-profile-change-container"]}>
    <p className={styles["profile-setting-main-profile-change-title"]}>프로필 변경</p>
    <div className={styles["profile-setting-main-profile-change-img-box"]}>
    {/* <img src={ProfileImg} alt="프로필 사진" className={styles["profile-setting-main-profile-change-img"]} /> */}
    <label className={styles["profile-setting-main-profile-change-add-img"]} for="input-file">
      <span className={styles["profile-setting-main-profile-change-add-img-icon"]}>블로그 이미지 찾아보기</span>
      <input type="file" accept="image/*" id="input-file" className={styles["profile-setting-main-profile-change-add-img-input"]}/> 
      </label>
  <button type="button" className={styles["profile-setting-main-profile-change-delete"]}><img src={DeleteImg} alt="이미지 삭제" className={styles["profile-setting-main-profile-change-delete-img"]} /></button>
    </div>
  </div>
);

export default ProfileChange;
