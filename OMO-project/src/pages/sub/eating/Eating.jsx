import styles from "./../../main/Main.module.css";
import { SubCategoryBox } from './../../../components/SubCategoryBox/SubCategoryBox';
import {sub} from "./../../../const/sub";


function Eating() {
  return (
    <div>
      <div className={styles["main-category-container"]}>
        {sub.map((el) => {
          return <SubCategoryBox key={el.id} title={el.title} img={el.src} />;
        })}
      </div>
    </div>

  

  );
}

export default Eating;