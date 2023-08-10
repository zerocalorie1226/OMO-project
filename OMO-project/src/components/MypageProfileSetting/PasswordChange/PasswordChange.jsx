import styles from "./PasswordChange.module.css";

const PasswordChange = () => (
  <div className={styles["profileSetting-main-passwordChange-container"]}>
    <p className={styles["profileSetting-main-passwordChange-title"]}>비밀번호 변경</p>
    <input type="text" placeholder="비밀번호를 입력해주세요." className={styles["profileSetting-main-passwordChange-input"]} />
    <button type="button" className={styles["profileSetting-main-passwordChange-button"]}>
      변경하기
    </button>
  </div>
);

export default PasswordChange;
