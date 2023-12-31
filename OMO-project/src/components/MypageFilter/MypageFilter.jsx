import React from "react";
import styles from "./MypageFilter.module.css";

const MypageFilter = ({setSelectedCategory, selectedCategory}) => {

return(
  <div className={styles["filter-container"]}>
    {/* <button type="button"  className={`${styles["filter-total"]} ${selectedCategory==="all" ? styles["filter-total-active"] : ""}`} onClick={() => setSelectedCategory("all")}>
      전체
    </button>
    <p className={styles["filter-bar"]}> | </p> */}
    <button type="button"  className={`${styles["filter-free"]} ${selectedCategory==="free" ? styles["filter-free-active"] : ""}`} onClick={() => setSelectedCategory("free")}>
      자유게시판
    </button>
    <p className={styles["filter-bar"]}> | </p>
    <button type="button"  className={`${styles["filter-worry"]} ${selectedCategory==="worry" ? styles["filter-worry-active"] : ""}`} onClick={() => setSelectedCategory("worry")}>
      고민게시판
    </button>
    <p className={styles["filter-bar"]}> | </p>
    <button type="button"  className={`${styles["filter-qna"]} ${selectedCategory==="qna" ? styles["filter-qna-active"] : ""}`} onClick={() => setSelectedCategory("qna")}>
      문의게시판
    </button>
  </div>
);
}

export default MypageFilter;
