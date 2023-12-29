import React from "react";
import styles from "./MypageFilter.module.css";

const MypageFilter = ({setSelectedCategory}) => (
  <div className={styles["filter-container"]}>
    <button type="button" className={styles["filter-total"]} onClick={() => setSelectedCategory("all")}>
      전체
    </button>
    <p className={styles["filter-bar"]}> | </p>
    <button type="button" className={styles["filter-free"]} onClick={() => setSelectedCategory("자유게시판")}>
      자유게시판
    </button>
    <p className={styles["filter-bar"]}> | </p>
    <button type="button" className={styles["filter-worry"]} onClick={() => setSelectedCategory("고민게시판")}>
      고민게시판
    </button>
    <p className={styles["filter-bar"]}> | </p>
    <button type="button" className={styles["filter-question"]} onClick={() => setSelectedCategory("문의게시판")}>
      문의게시판
    </button>
  </div>
);

export default MypageFilter;
