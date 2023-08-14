import styles from "./Save.module.css";

const Save = () => (
  <div className={styles["Save-button-container"]}>
    <button type="button" className={styles["Save-button"]}>
      저장
    </button>
  </div>
);

export default Save;
