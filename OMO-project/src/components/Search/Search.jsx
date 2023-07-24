import styles from "./Search.module.css";
import LogoCircle from "../../assets/로고 동그라미.png";
import Magnifier from "../../assets/돋보기.png";

export function Search() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["main-img-container"]}>
        <img src={LogoCircle} alt="로고 동그라미" />
        <img src={Magnifier} alt="돋보기" />
      </div>
      <input className={styles["main-search-container"]} placeholder="장소를 입력해주세요" />
    </div>
  );
}
