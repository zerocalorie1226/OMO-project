import styles from "./MembershipWithdrawal.module.css";
import {useNavigate} from "react-router-dom";

const MembershipWithdrawal = () => {
  const navigate = useNavigate();

  const handleWithdrawal = () => {
    const confirmWithdrawal = window.confirm("정말 탈퇴하시겠습니까?");

    if (confirmWithdrawal) {
      alert("탈퇴되었습니다.");
      navigate("/");
    }
  };

  return (
    <div className={styles["profile-setting-main-membership-withdrawal-container"]}>
      <p className={styles["profile-setting-main-membership-withdrawal-title"]}>탈퇴하기</p>

      <button type="button" className={styles["profile-setting-main-membership-withdrawal-button"]} onClick={handleWithdrawal}>
        회원 탈퇴
      </button>
    </div>
  );
};

export default MembershipWithdrawal;
