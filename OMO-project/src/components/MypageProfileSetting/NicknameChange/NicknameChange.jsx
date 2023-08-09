import styles from "./NicknameChange.module.css";

const NicknameChange = () => (
  <div className={styles["profileSetting-main-nicknameChange-container"]}>
    <p className={styles["profileSetting-main-nicknameChange-title"]}>닉네임 변경</p>
    <input type="text" placeholder="닉네임을 입력해주세요." className={styles["profileSetting-main-nicknameChange-input"]} />
    <button type="button" className={styles["profileSetting-main-nicknameChange-button"]}>
      변경하기
    </button>
  </div>
);

export default NicknameChange;
