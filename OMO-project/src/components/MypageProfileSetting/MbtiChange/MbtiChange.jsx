import styles from "./MbtiChange.module.css";
import {useNavigate} from "react-router-dom";

const MbtiChange = () => {
  const navigate = useNavigate();

  const ChangeMbti = () => {
    const confirmWithdrawal = window.confirm("Mbti를 변경하시겠습니까?");

    if (confirmWithdrawal) {
      alert("변경되었습니다.");
      navigate("/ProfileSetting");
    }
  };
  return (
    <div className={styles["profile-setting-main-mbti-change-container"]}>
      <p className={styles["profile-setting-main-mbti-change-title"]}>MBTI 변경</p>
      <div className={styles["profile-setting-main-mbti-change-select-container"]}>
        <select className={styles["profile-setting-main-mbti-change-select-IE"]} name="mbtiIE" id="mbti-IE">
          <option value="">S/N</option>
          <option value="I">I</option>
          <option value="E">E</option>
        </select>
        <select className={styles["profile-setting-main-mbti-change-select-SN"]} name="mbtiSN" id="mbti-SN">
          <option value="">S/N</option>
          <option value="S">S</option>
          <option value="N">N</option>
        </select>
        <select className={styles["profile-setting-main-mbti-change-select-TF"]} name="mbtiTF" id="mbti-TF">
          <option value="">T/F</option>
          <option value="T">T</option>
          <option value="F">F</option>
        </select>
        <select className={styles["profile-setting-main-mbti-change-select-JP"]} name="mbtiJP" id="mbti-JP">
          <option value="">J/P</option>
          <option value="J">J</option>
          <option value="P">P</option>
        </select>
      </div>
      <button type="button" className={styles["profile-setting-main-mbti-change-button"]} onClick={ChangeMbti}>
        변경하기
      </button>
    </div>
  );
};

export default MbtiChange;
