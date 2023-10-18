import styles from "./ProfileChange.module.css";
import DeleteImg from "../../../assets/my-page/setting/profile-delete.png";
import {useRef, useState} from "react";
import DefaultImg from "../../../assets/my-page/setting/default-background.png";


const ProfileChange = () => {
  
const [Image, setImage] = useState(DefaultImg);
const [File, setFile] = useState("");
const fileInput = useRef(null);

const onChange = (e) => {
  if (e.target.files[0]) {
    setFile(e.target.files[0]);
  } else {
    //업로드 취소할 시
    setImage(DefaultImg);
    return;
  }

  //화면에 프로필 사진 표시
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      setImage(reader.result);
    }
  };
  reader.readAsDataURL(e.target.files[0]);
};
  return(
  <div className={styles["profile-setting-main-profile-change-container"]}>
    <p className={styles["profile-setting-main-profile-change-title"]}>프로필 변경</p>
    <div className={styles["profile-setting-main-profile-change-img-box"]}>
      <img src={Image} alt="프로필 사진" className={styles["profile-setting-main-profile-change-img"]} />
      <label className={styles["profile-setting-main-profile-change-add-img"]} htmlFor="input-file">
        <span className={styles["profile-setting-main-profile-change-add-img-icon"]}>블로그 이미지 찾아보기</span>
        <input
          type="file"
          accept="image/*"
          id="input-file"
          className={styles["profile-setting-main-profile-change-add-img-input"]}
          onClick={() => {
            fileInput.current.click();
          }}
          ref={fileInput}
          onChange={onChange}
        />
      </label>
      <button type="button" className={styles["profile-setting-main-profile-change-delete"]}>
        <img src={DeleteImg} alt="이미지 삭제" className={styles["profile-setting-main-profile-change-delete-img"]} />
      </button>
    </div>
  </div>
);
        };

export default ProfileChange;
