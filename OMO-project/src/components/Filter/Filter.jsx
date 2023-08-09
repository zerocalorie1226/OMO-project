import styles from "./Filter.module.css";

const Filter = () => (
  <div className={styles["filter-container"]}>
    <button href="#" className={styles["filter-recommend"]}>
      추천순
    </button>
    <p className={styles["filter-p"]}> | </p>
    <button href="#" className={styles["filter-close"]}>
      가까운 순
    </button>
    <p className={styles["filter-p"]}> | </p>
    <button href="#" className={styles["filter-review"]}>
      리뷰 많은 순
    </button>
    <p className={styles["filter-p"]}> | </p>
    <button href="#" className={styles["filter-open"]}>
      영업 중
    </button>
  </div>
);

export default Filter;
