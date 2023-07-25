import styles from "./SubCategoryBox.module.css";

export function SubCategoryBox(props) {
  return (
    <div>
      <div className={styles["sub-category-box"]}>
        <span className={styles["sub-category-box-title"]}>{props.title}</span>
        <img className={styles["sub-category-box-img"]} src={props.img} />
      </div>
    </div>
  );
}
