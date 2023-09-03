import styles from "./MyCourseFindSearchBox.module.css";
import Magnifier from "./../../../assets/magnifier.png";

const MyCourseFindSearchBox = () => (
  <div className={styles["mycourse-find-search-container"]}>
    <div className={styles["mycourse-find-search-img-container"]}>
      <a href="#">
        <img src={Magnifier} alt="돋보기" />
      </a>
    </div>
    <input className={styles["mycourse-find-search-input-container"]} placeholder="검색어를 입력해주세요" maxLength={20} />
  </div>
);

export default MyCourseFindSearchBox;
