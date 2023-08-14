import styles from "./Edit-Share.module.css";

const EditShare = () => (
  <div className={styles["Edit-Share-button-container"]}>
    <button type="button" className={styles["Edit-button"]}>
      편집
    </button>
    <button type="button" className={styles["Share-button"]}>
      커뮤니티에 공유
    </button>
  </div>
);
export default EditShare;
