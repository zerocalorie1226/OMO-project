import styles from "./SubCategoryBox.module.css";
import {Link} from "react-router-dom";

export const SubCategoryBox = (props) => (
  <>
    <Link to="/List">
      <a href="#" className={styles["sub-category-container"]}>
        <div className={styles["sub-category-box"]}>
          <span className={styles["sub-category-box-title"]}>{props.title}</span>
          <img className={styles["sub-category-box-img"]} src={props.src} />
        </div>
      </a>
    </Link>
  </>
);
