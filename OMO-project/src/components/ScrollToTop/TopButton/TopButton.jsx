import styles from "./TopButton.module.css";
import TopButtonImg from "../../../assets/top-button.png"


export const TopButton = () => (
  <>
<button  className={styles["top-button-container"]} type="button"> <img src={TopButtonImg} alt="탑버튼 아이콘"/> </button>
</>
);