import styles from "./MbtiChange.module.css";

const MbtiChange = () => (
  <div className={styles["profileSetting-main-MbtiChange-container"]}>
    <p className={styles["profileSetting-main-MbtiChange-title"]}>MBTI 변경</p>
    <div className={styles["profileSetting-main-MbtiChange-select-container"]}>
      <select className={styles["profileSetting-main-MbtiChange-select-IE"]} name="mbti" id="mbti-select">
        <option value="I">I</option>
        <option value="E">E</option>
      </select>
      <select className={styles["profileSetting-main-MbtiChange-select-SN"]} name="mbti" id="mbti-select">
        <option value="S">S</option>
        <option value="N">N</option>
      </select>
      <select className={styles["profileSetting-main-MbtiChange-select-TF"]} name="mbti" id="mbti-select">
        <option value="T">T</option>
        <option value="F">F</option>
      </select>
      <select className={styles["profileSetting-main-MbtiChange-select-JP"]} name="mbti" id="mbti-select">
        <option value="J">J</option>
        <option value="P">P</option>
      </select>
    </div>
    <button type="button" className={styles["profileSetting-main-MbtiChange-button"]}>
      변경하기
    </button>
  </div>
);

export default MbtiChange;
