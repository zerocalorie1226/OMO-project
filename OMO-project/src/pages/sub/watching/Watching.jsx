import styles from "./../../main/Main.module.css";
import {SubCategoryBox} from "./../../../components/SubCategoryBox/SubCategoryBox";
import {watching} from "./../../../const/watching";

function Watching() {
  return (
    <div>
      <div className={styles["main-category-container"]}>
        {watching.map((el) => {
          return <SubCategoryBox key={el.id} title={el.title} img={el.src} />;
        })}
      </div>
    </div>
  );
}

export default Watching;
