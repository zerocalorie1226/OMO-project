import React from "react";
import styles from "./MypageFilter.module.css";

const MypageFilter = ({setSelectedCategory}) => {

return(
  <div className={styles["filter-container"]}>
    <button type="button" className={styles["filter-total"]} onClick={() => setSelectedCategory("all")}>
      전체
    </button>
    <p className={styles["filter-bar"]}> | </p>
    <button type="button" className={styles["filter-free"]} onClick={() => setSelectedCategory("free")}>
      자유게시판
    </button>
    <p className={styles["filter-bar"]}> | </p>
    <button type="button" className={styles["filter-worry"]} onClick={() => setSelectedCategory("worry")}>
      고민게시판
    </button>
    <p className={styles["filter-bar"]}> | </p>
    <button type="button" className={styles["filter-question"]} onClick={() => setSelectedCategory("qna")}>
      문의게시판
    </button>
  </div>
);
}

export default MypageFilter;
