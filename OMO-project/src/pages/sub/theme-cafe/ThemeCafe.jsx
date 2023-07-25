import styles from "./../../main/Main.module.css";
import {SubCategoryBox} from "./../../../components/SubCategoryBox/SubCategoryBox";
import {themeCafe} from "./../../../const/themeCafe";

function ThemeCafe() {
  return (
    <div>
      <div className={styles["main-category-container"]}>
        {themeCafe.map((el) => {
          return <SubCategoryBox key={el.id} title={el.title} img={el.src} />;
        })}
      </div>
    </div>
  );
}

export default ThemeCafe;
