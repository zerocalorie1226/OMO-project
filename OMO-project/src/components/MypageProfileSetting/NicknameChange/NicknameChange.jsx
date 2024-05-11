import styles from "./NicknameChange.module.css";
import {useNavigate} from "react-router-dom";

const NicknameChange = () => {
  const navigate = useNavigate();
  
  const ChangeNickName=()=>{
    const confirmWithdrawal = window.confirm("닉네임을 변경하시겠습니까?");

    if (confirmWithdrawal) {
      alert("변경되었습니다.");
      navigate("/ProfileSetting");
  }}
  return(
  <div className={styles["profile-setting-main-nickname-change-container"]}>
    <p className={styles["profile-setting-main-nickname-change-title"]}>닉네임 변경</p>
    <input type="text" placeholder="닉네임을 입력해주세요." className={styles["profile-setting-main-nickname-change-input"]} />
    <button type="button" className={styles["profile-setting-main-nickname-change-button"]} onClick={ChangeNickName}>
      변경하기
    </button>
  </div>
);
}
export default NicknameChange;
