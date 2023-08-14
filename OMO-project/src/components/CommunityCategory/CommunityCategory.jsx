import styles from "./CommunityCategory.module.css";

export const CommunityCategory = () => (
  <>
  
  <div className={styles["community-category-container"]}>

  
  <div className={styles["community-category-mycourse-box"]}>
  <a href="#" className={styles["community-category-mycourse"]}>나만의 코스 게시판</a>
  </div>

  <div className={styles["community-category-worry-box"]}>
  <a href="#" className={styles["community-category-worry"]}>고민 게시판</a>
  </div>

  <div className={styles["community-category-free-box"]}>
  <a href="#" className={styles["community-category-free"]}>자유 게시판</a>
  </div>

  <div className={styles["community-category-inquiry-box"]}>
  <a href="#" className={styles["community-category-inquiry"]}>문의 게시판</a>
  </div>
  
  </div>
  </>
);
