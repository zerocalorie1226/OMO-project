import styles from "./ComeBackList.module.css";

const ComeBackList = () => (
  <div className={styles["ComeBackList-button-container"]}>
    <button type="button" className={styles["ComeBackList-button"]}>
      목록으로 돌아가기
    </button>
  </div>
);
export default ComeBackList;
