import styles from "./Filter.module.css";

const Filter = () => (
  <div className={styles["filter-container"]}>
    <a href="#" className={styles["filter-recommend"]}>
      추천순
    </a>
    <p className={styles["filter-p"]}> | </p>
    <a href="#" className={styles["filter-close"]}>
      가까운 순
    </a>
    <p className={styles["filter-p"]}> | </p>
    <a href="#" className={styles["filter-review"]}>
      리뷰 많은 순
    </a>
    <p className={styles["filter-p"]}> | </p>
    <a href="#" className={styles["filter-open"]}>
      영업 중
    </a>
  </div>
);

export default Filter;
