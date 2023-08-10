import styles from "./MembershipWithdrawal.module.css";

const MembershipWithdrawal = () => (
  <div className={styles["profileSetting-main-membershipWithdrawal-container"]}>
    <p className={styles["profileSetting-main-membershipWithdrawal-title"]}>탈퇴하기</p>

    <button type="button" className={styles["profileSetting-main-membershipWithdrawal-button"]}>
      회원 탈퇴
    </button>
  </div>
);

export default MembershipWithdrawal;
