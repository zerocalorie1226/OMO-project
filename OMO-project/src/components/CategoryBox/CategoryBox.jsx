import styles from "./CategoryBox.module.css";

export function CategoryBox(props) {
  return (
    <div>
      <div className={styles["main-category-box"]}>
        <span className={styles["main-category-box-title"]}>{props.title}</span>
        <img className={styles["main-category-box-img"]} src={props.img} />
      </div>
    </div>
  );
}
